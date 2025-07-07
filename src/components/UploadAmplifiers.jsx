import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const UploadAmplifiers = () => {
  const [amplifiers, setAmplifiers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [newAmp, setNewAmp] = useState({ BRAND: '', MODEL: '', PRICE: '' });
  const [jsonInput, setJsonInput] = useState('');

  const fetchAmplifiers = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'Amplifiers'));
      const items = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      setAmplifiers(items);
    } catch (error) {
      console.error('Error fetching amplifiers:', error);
    }
  };

  useEffect(() => {
    fetchAmplifiers();
  }, []);

  useEffect(() => {
    let filteredList = amplifiers;

    if (selectedBrand !== 'All') {
      filteredList = filteredList.filter(a => a.BRAND === selectedBrand);
    }

    if (searchTerm.trim()) {
      filteredList = filteredList.filter(a =>
        a.MODEL.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFiltered(filteredList);
  }, [amplifiers, selectedBrand, searchTerm]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'Amplifiers', id));
      fetchAmplifiers();
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete.');
    }
  };

  const handleCustomUpload = async () => {
    const { BRAND, MODEL, PRICE } = newAmp;
    if (!BRAND || !MODEL || !PRICE) {
      alert('Fill in all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'Amplifiers'), newAmp);
      alert('Amplifier added!');
      setNewAmp({ BRAND: '', MODEL: '', PRICE: '' });
      fetchAmplifiers();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed.');
    }
  };

  const handleJsonUpload = async () => {
    try {
      const parsed = JSON.parse(jsonInput);
      if (!Array.isArray(parsed)) throw new Error('JSON must be an array');

      for (const item of parsed) {
        if (!item.BRAND || !item.MODEL || !item.PRICE) {
          alert('Each item must have BRAND, MODEL, and PRICE');
          return;
        }
        await addDoc(collection(db, 'Amplifiers'), item);
      }

      alert('JSON uploaded');
      setJsonInput('');
      fetchAmplifiers();
    } catch (error) {
      console.error('JSON Upload Error:', error);
      alert('Invalid JSON');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAmp(prev => ({
      ...prev,
      [name]: name === 'PRICE' ? parseInt(value) || '' : value,
    }));
  };

  const brandList = ['All', ...new Set(amplifiers.map(a => a.BRAND).filter(Boolean))];

  return (
    <div className="p-4 max-w-full mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT FORM SIDE */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold mb-4">Upload Amplifiers</h1>

          {/* Custom Input */}
          <div className="border p-4 rounded shadow bg-white">
            <h2 className="text-xl font-semibold mb-2">Add Custom Amplifier</h2>
            <input
              name="BRAND"
              placeholder="Brand"
              value={newAmp.BRAND}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mb-2"
            />
            <input
              name="MODEL"
              placeholder="Model"
              value={newAmp.MODEL}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mb-2"
            />
            <input
              name="PRICE"
              placeholder="Price"
              type="number"
              value={newAmp.PRICE}
              onChange={handleInputChange}
              className="w-full border p-2 rounded mb-2"
            />
            <button
              onClick={handleCustomUpload}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 w-full"
            >
              Add Amplifier
            </button>
          </div>

          {/* JSON Upload */}
          <div className="border p-4 rounded shadow bg-white">
            <h2 className="text-xl font-semibold mb-2">Upload from JSON</h2>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              rows={6}
              placeholder={`[\n  {"BRAND":"DENON","MODEL":"X250","PRICE":52900}\n]`}
              className="w-full border p-2 rounded font-mono mb-2"
            />
            <button
              onClick={handleJsonUpload}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800 w-full"
            >
              Upload JSON
            </button>
          </div>
        </div>

        {/* RIGHT TABLE SIDE */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Amplifier List</h2>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="border px-3 py-2 rounded"
              >
                {brandList.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              placeholder="Search by model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-3 py-2 rounded w-full"
            />
          </div>

          {/* Table */}
          {filtered.length === 0 ? (
            <p>No matching data found.</p>
          ) : (
            <div className="overflow-x-auto border rounded shadow bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border px-4 py-2">Brand</th>
                    <th className="border px-4 py-2">Model</th>
                    <th className="border px-4 py-2">Price</th>
                    <th className="border px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((amp) => (
                    <tr key={amp.id}>
                      <td className="border px-4 py-2">{amp.BRAND}</td>
                      <td className="border px-4 py-2">{amp.MODEL}</td>
                      <td className="border px-4 py-2">₹{amp.PRICE.toLocaleString('en-IN')}</td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleDelete(amp.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadAmplifiers;
