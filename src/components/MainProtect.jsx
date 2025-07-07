import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const MainProtect = ({ element }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const isAuthenticated = sessionStorage.getItem('cf_access') === 'true';

  const handleLogin = async () => {
    if (!username || !password) return alert('Fill all fields');
    setLoading(true);

    try {
      const querySnapshot = await getDocs(collection(db, 'auth'));
      let matched = false;

      querySnapshot.forEach((doc) => {
        const admin = doc.data();
        if (admin.username === username && admin.password === password) {
          sessionStorage.setItem('cf_access', 'true');
          sessionStorage.setItem('cf_user', username);
          matched = true;
        }
      });

      if (matched) {
        window.location.reload(); // reload to re-render route
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) return element;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default MainProtect;
