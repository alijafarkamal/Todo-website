import express from 'express';
import cors from 'cors';
import sql from 'mssql';
import dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Example route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Todo API');
});

// Database configuration
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT, 10) || 1433,  // Ensure port is used correctly
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true // Change to true for local dev / self-signed certs
  },
};

let pool;

const initializeDatabase = async () => {
  try {
    await pool.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='todos' AND xtype='U')
      CREATE TABLE todos (
        id INT IDENTITY(1,1) PRIMARY KEY,
        text NVARCHAR(500) NOT NULL,
        completed BIT DEFAULT 0,
        created_at DATETIME DEFAULT GETDATE(),
        updated_at DATETIME DEFAULT GETDATE()
      )
    `);
    console.log('Database initialized');
  } catch (err) {
    console.error('Database initialization failed:', err);
    process.exit(1);
  }
};

const startServer = async () => {
  try {
    pool = await sql.connect(dbConfig);
    await initializeDatabase();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();

// Routes

// Get all todos
app.get('/api/todos', asyncHandler(async (req, res) => {
  const result = await pool.request()
    .query('SELECT * FROM todos ORDER BY created_at DESC');
  res.json(result.recordset);
}));

// Create todo
app.post('/api/todos', asyncHandler(async (req, res) => {
  const { text } = req.body;
  
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return res.status(400).json({ error: 'Todo text is required' });
  }

  const result = await pool.request()
    .input('text', sql.NVarChar, text.trim())
    .query(`
      INSERT INTO todos (text)
      OUTPUT INSERTED.*
      VALUES (@text)
    `);
  
  res.status(201).json(result.recordset[0]);
}));

// Update todo
app.put('/api/todos/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Invalid todo ID' });
  }

  let updateQuery = 'UPDATE todos SET updated_at = GETDATE()';
  const request = pool.request().input('id', sql.Int, id);

  if (text !== undefined) {
    if (typeof text !== 'string' || text.trim().length === 0) {
      return res.status(400).json({ error: 'Invalid todo text' });
    }
    updateQuery += ', text = @text';
    request.input('text', sql.NVarChar, text.trim());
  }

  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return res.status(400).json({ error: 'Invalid completed status' });
    }
    updateQuery += ', completed = @completed';
    request.input('completed', sql.Bit, completed);
  }

  updateQuery += ' OUTPUT INSERTED.* WHERE id = @id';

  const result = await request.query(updateQuery);

  if (result.recordset.length === 0) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json(result.recordset[0]);
}));

// Delete todo
app.delete('/api/todos/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Invalid todo ID' });
  }

  const result = await pool.request()
    .input('id', sql.Int, id)
    .query('DELETE FROM todos OUTPUT DELETED.* WHERE id = @id');

  if (result.recordset.length === 0) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json({ message: 'Todo deleted successfully' });
}));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});
