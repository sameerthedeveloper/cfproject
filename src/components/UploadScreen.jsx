import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const UploadScreen = () => {
  const [entries, setEntries] = useState([]);
  const [ratio, setRatio] = useState('');
  const [size, setSize] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [filterRatio, setFilterRatio] = useState('ALL');
  const [ratiosList, setRatiosList] = useState([]);

  const handleAddEntry = async () => {
    if (!ratio || !size) {
      alert('Both Ratio and Size are required');
      return;
    }

    try {
      await addDoc(collection(db, 'SignatureScreenSizes'), {
        ratio,
        size: parseFloat(size),
      });
      setRatio('');
      setSize('');
      setRefresh(prev => !prev);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload entry.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'SignatureScreenSizes', id));
      setRefresh(prev => !prev);
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete entry.');
    }
  };

  const fetchEntries = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'SignatureScreenSizes'));
      const items = [];
      const ratios = new Set();

      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        items.push({ id: docSnap.id, ...data });
        if (data.ratio) {
          ratios.add(data.ratio);
        }
      });

      setEntries(items);
      setRatiosList(['ALL', ...Array.from(ratios)]);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [refresh]);

  const filteredEntries = filterRatio === 'ALL'
    ? entries
    : entries.filter(entry => entry.ratio === filterRatio);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 font-sans text-sm">
      <h1 className="text-2xl font-semibold text-center">Signature Screen Size Upload</h1>

      {/* Form Input */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
        <input
          type="text"
          placeholder="Aspect Ratio (e.g., 16:9)"
          value={ratio}
          onChange={(e) => setRatio(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Size (e.g., 120)"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <button
          onClick={handleAddEntry}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition w-full"
        >
          Add Entry
        </button>
        <select
          value={filterRatio}
          onChange={(e) => setFilterRatio(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        >
          {ratiosList.map((r, i) => (
            <option key={i} value={r}>
              {r === 'ALL' ? 'All Ratios' : r}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded shadow bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Aspect Ratio</th>
              <th className="px-4 py-2 border">Size</th>
              <th className="px-4 py-2 border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center px-4 py-4 text-gray-500">
                  No entries found.
                </td>
              </tr>
            ) : (
              filteredEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{entry.ratio}</td>
                  <td className="border px-4 py-2">{entry.size}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800 transition"
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

export default UploadScreen;
