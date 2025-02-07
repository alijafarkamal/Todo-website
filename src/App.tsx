// import React, { useState } from 'react';
// import { Search, Menu, Star, TrendingUp, Award, PlayCircle, ChevronRight } from 'lucide-react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import FeaturedSection from './components/FeaturedSection';
// import TrendingSection from './components/TrendingSection';

// function App() {
//   return (
//     <div className="min-h-screen bg-[#1a1a1a] text-white">
//       <Navbar />
//       <Hero />
//       <FeaturedSection />
//       <TrendingSection />
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/todos');
      setTodos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos. Please try again later.');
      toast.error('Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const response = await axios.post('http://localhost:3000/api/todos', {
        text: newTodo,
        completed: false
      });
      setTodos([...todos, response.data]);
      setNewTodo('');
      toast.success('Todo added successfully');
    } catch (err) {
      toast.error('Failed to add todo');
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`http://localhost:3000/api/todos/${id}`, {
        completed: !completed
      });
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
      toast.success('Todo status updated');
    } catch (err) {
      toast.error('Failed to update todo status');
    }
  };

  const startEdit = (todo) => {
    setEditingTodo(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = async (id) => {
    if (!editText.trim()) return;

    try {
      await axios.put(`http://localhost:3000/api/todos/${id}`, {
        text: editText
      });
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, text: editText } : todo
      ));
      setEditingTodo(null);
      toast.success('Todo updated successfully');
    } catch (err) {
      toast.error('Failed to update todo');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
      toast.success('Todo deleted successfully');
    } catch (err) {
      toast.error('Failed to delete todo');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Todo List</h1>
        
        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
        </form>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Completed
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {filteredTodos.map(todo => (
            <div
              key={todo.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id, todo.completed)}
                className="w-5 h-5 rounded-md"
              />
              
              {editingTodo === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 px-3 py-1 border rounded-lg"
                  autoFocus
                />
              ) : (
                <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                  {todo.text}
                </span>
              )}

              <div className="flex gap-2">
                {editingTodo === todo.id ? (
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(todo)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTodos.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No todos found. Add some tasks to get started!
          </div>
        )}
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;