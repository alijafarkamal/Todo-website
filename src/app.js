import React, { useState, useEffect } from 'react';
import './App.css';
import th from './teme.jpg';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="App bg-gray-100 min-h-screen p-6">
      <div className="profile-container bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to my page</h1>
        <img src={th} alt="Profile" className="profile-image mx-auto" />
        <h1 className="text-xl font-semibold">Name: Ali Jafar</h1>
        <h2 className="text-lg text-gray-700">Date of Birth: 16-03-2006</h2>
        <p className="bio text-gray-600 mt-4">
          I am a passionate programmer with skills in data analysis and automation using Python.
        </p>
        <h2 className="text-lg font-semibold mt-4">Life Goals</h2>
        <ul className="goals-list list-none mt-2">
          <li className="bg-blue-100 p-2 rounded-md my-1">To make useful products</li>
          <li className="bg-green-100 p-2 rounded-md my-1">To make the world a better place to live</li>
          <li className="bg-yellow-100 p-2 rounded-md my-1">To travel the world</li>
        </ul>
      </div>

      {/* Books List */}
      <div className="mt-6 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Books List</h2>
        <ul>
          {books.map(book => (
            <li key={book.id} className="bg-gray-200 p-4 my-2 rounded-lg shadow-sm">
              <p className="font-bold">{book.title}</p>
              <p className="text-gray-600">Author: {book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
