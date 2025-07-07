import React, { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '' });
  const [editingId, setEditingId] = useState(null);
  const [editedUser, setEditedUser] = useState({ username: '', password: '' });

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, 'auth'));
    const items = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
    setUsers(items);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    if (!newUser.username.trim() || !newUser.password.trim()) {
      alert('Please enter both username and password');
      return;
    }

    await addDoc(collection(db, 'auth'), newUser);
    setNewUser({ username: '', password: '' });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'auth', id));
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setEditedUser({ username: user.username, password: user.password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (id) => {
    if (!editedUser.username.trim() || !editedUser.password.trim()) {
      alert('Username and password cannot be empty');
      return;
    }

    await updateDoc(doc(db, 'auth', id), editedUser);
    setEditingId(null);
    fetchUsers();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Users</h2>

      {/* Add User Form */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <button
          onClick={handleAddUser}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Add User
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto border rounded shadow bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Password</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center p-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">
                    {editingId === user.id ? (
                      <input
                        name="username"
                        value={editedUser.username}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      user.username
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingId === user.id ? (
                      <input
                        name="password"
                        value={editedUser.password}
                        onChange={handleChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    ) : (
                      user.password
                    )}
                  </td>
                  <td className="border px-4 py-2 space-x-2">
                    {editingId === user.id ? (
                      <button
                        onClick={() => handleSave(user.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
