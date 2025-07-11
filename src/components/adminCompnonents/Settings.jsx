import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'; // adjust path if needed

function Settings() {
  const [status, setStatus] = useState('offline');
  const [message, setMessage] = useState('');
  const docRef = doc(db, 'siteStatus', 'appStatus');

  // 🟡 Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        setStatus(data.status || 'offline');
        setMessage(data.message || '');
      }
    };
    fetchData();
  }, []);

  // 🔁 Auto-update Firestore
  const updateField = async (field, value) => {
    try {
      await updateDoc(docRef, { [field]: value });
      console.log(`${field} updated to:`, value);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  // 🔁 Toggle status and update instantly
  const toggleStatus = () => {
    const newStatus = status === 'online' ? 'offline' : 'online';
    setStatus(newStatus);
    updateField('status', newStatus);
  };

  // 🔁 Auto-update message on change
  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    updateField('message', newMessage);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Edit App Status</h2>

      <div className="flex items-center gap-4">
        <label className="font-medium">Status:</label>
        <button
          onClick={toggleStatus}
          className={`px-4 py-2 rounded text-white transition ${
            status === 'online' ? 'bg-green-500' : 'bg-gray-500'
          }`}
        >
          {status === 'online' ? '🟢 Online' : '⚪ Offline'}
        </button>
      </div>

      <div>
        <label className="block font-medium">Message:</label>
        <input
          className="border p-2 w-full"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
    </div>
  );
}

export default Settings;
