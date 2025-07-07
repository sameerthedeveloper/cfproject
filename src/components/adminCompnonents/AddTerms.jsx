import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

const AddTerms = () => {
  const [terms, setTerms] = useState([]);
  const [newTerm, setNewTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchTerms = async () => {
      const querySnapshot = await getDocs(collection(db, 'TermsAndConditions'));
      const items = [];
      querySnapshot.forEach((docSnap) => {
        items.push({ id: docSnap.id, ...docSnap.data() });
      });
      setTerms(items);
    };

    fetchTerms();
  }, [refresh]);

  const handleAdd = async () => {
    if (!newTerm.trim()) return alert('Please enter a term.');

    await addDoc(collection(db, 'TermsAndConditions'), {
      content: newTerm.trim(),
      timestamp: serverTimestamp(),
    });

    setNewTerm('');
    setRefresh((prev) => !prev);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'TermsAndConditions', id));
    setRefresh((prev) => !prev);
  };

  const handleEdit = (term) => {
    setEditingId(term.id);
    setEditingText(term.content);
  };

  const handleSave = async (id) => {
    await updateDoc(doc(db, 'TermsAndConditions', id), {
      content: editingText.trim(),
      timestamp: serverTimestamp(),
    });
    setEditingId(null);
    setEditingText('');
    setRefresh((prev) => !prev);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Manage Terms & Conditions</h2>

      {/* Add Term Input */}
      <div className="flex  sm:flex-row gap-4 items-center">
        <input
          value={newTerm}
          onChange={(e) => setNewTerm(e.target.value)}
          placeholder="Enter new term"
          className="border p-2 rounded w-full sm:w-auto flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Add
        </button>
      </div>

      {/* Terms Table */}
      <div className="overflow-x-auto border rounded shadow bg-white max-h-[400px]">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left w-full">Term</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {terms.length === 0 ? (
              <tr>
                <td colSpan={2} className="text-center p-4 text-gray-500">
                  No terms added yet.
                </td>
              </tr>
            ) : (
              terms.map((term) => (
                <tr key={term.id}>
                  <td className="border px-4 py-2">
                    {editingId === term.id ? (
                      <input
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="w-full border rounded p-1"
                      />
                    ) : (
                      term.content
                    )}
                  </td>
                  <td className="border px-4 py-2 text-center space-x-2">
                    {editingId === term.id ? (
                      <button
                        onClick={() => handleSave(term.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(term)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(term.id)}
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

export default AddTerms;
