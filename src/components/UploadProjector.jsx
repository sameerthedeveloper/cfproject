import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const UploadProjector = () => {
  const [projectors, setProjectors] = useState([]);
  const [newProjector, setNewProjector] = useState({
    BRAND: '',
    MODEL: '',
    PRICE: ''
  });
  const [jsonInput, setJsonInput] = useState('');

  const defaultProjectors = [
    { BRAND: 'SONY', MODEL: '5000ES', PRICE: 425000 },
    { BRAND: 'SONY', MODEL: '7000ES', PRICE: 119000 },
    { BRAND: 'SONY', MODEL: 'BRAVIA7', PRICE: 575000 },
    { BRAND: 'SONY', MODEL: 'BRAVIA9', PRICE: 165000 }
  ];

  const handleUpload = async () => {
    try {
      for (const item of defaultProjectors) {
        await addDoc(collection(db, 'Projectors'), item);
      }
      alert('Default projectors uploaded!');
      fetchProjectors();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload default data.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProjector((prev) => ({
      ...prev,
      [name]: name === 'PRICE' ? parseInt(value) || '' : value
    }));
  };

  const handleCustomUpload = async () => {
    const { BRAND, MODEL, PRICE } = newProjector;
    if (!BRAND || !MODEL || !PRICE) {
      alert('Fill in all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'Projectors'), newProjector);
      alert('Custom projector added!');
      setNewProjector({ BRAND: '', MODEL: '', PRICE: '' });
      fetchProjectors();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload custom projector.');
    }
  };

  const handleJsonUpload = async () => {
    try {
      const parsed = JSON.parse(jsonInput);
      if (!Array.isArray(parsed)) throw new Error('JSON must be an array');

      for (const item of parsed) {
        if (!item.BRAND || !item.MODEL || !item.PRICE) {
          alert('Each item must have BRAND, MODEL, PRICE.');
          return;
        }
        await addDoc(collection(db, 'Projectors'), item);
      }

      alert('JSON data uploaded!');
      setJsonInput('');
      fetchProjectors();
    } catch (error) {
      console.error('JSON Upload Error:', error);
      alert('Invalid JSON format.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'Projectors', id));
      fetchProjectors();
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete.');
    }
  };

  const fetchProjectors = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Projectors'));
      const items = [];
      querySnapshot.forEach((docSnap) => {
        items.push({ id: docSnap.id, ...docSnap.data() });
      });
      setProjectors(items);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchProjectors();
  }, []);

  return (
<div className="p-4 max-w-full mx-auto">
  <div className="flex flex-col lg:flex-row gap-6">
    {/* LEFT - Input Section */}
    <div className="w-full lg:w-1/2 space-y-6">
      {/* Upload Default */}
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
      >
        Upload Default Projectors
      </button>

      {/* Custom Input */}
      <div className="border p-4 rounded shadow bg-white">
        <h2 className="text-xl font-semibold mb-2">Add Custom Projector</h2>
        <input
          name="BRAND"
          placeholder="Brand"
          value={newProjector.BRAND}
          onChange={handleInputChange}
          className="w-full border p-2 rounded mb-2"
        />
        <input
          name="MODEL"
          placeholder="Model"
          value={newProjector.MODEL}
          onChange={handleInputChange}
          className="w-full border p-2 rounded mb-2"
        />
        <input
          name="PRICE"
          placeholder="Price"
          type="number"
          value={newProjector.PRICE}
          onChange={handleInputChange}
          className="w-full border p-2 rounded mb-2"
        />
        <button
          onClick={handleCustomUpload}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 w-full"
        >
          Add Projector
        </button>
      </div>

      {/* JSON Upload */}
      <div className="border p-4 rounded shadow bg-white">
        <h2 className="text-xl font-semibold mb-2">Upload from JSON</h2>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          rows={6}
          placeholder={`[\n  {"BRAND":"JVC","MODEL":"NZ8","PRICE":899000},\n  {"BRAND":"EPSON","MODEL":"TW9400","PRICE":289000}\n]`}
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

    {/* RIGHT - Table Section */}
    <div className="w-full lg:w-1/2 over hidden h-screen lg:block">
      <h1 className="text-2xl font-bold mb-4">Projector List</h1>
      {projectors.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto border rounded shadow bg-white">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border px-4 py-2">Brand</th>
                <th className="border px-4 py-2">Model</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {projectors.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.BRAND}</td>
                  <td className="border px-4 py-2">{item.MODEL}</td>
                  <td className="border px-4 py-2">₹{item.PRICE}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
                    >
                      Remove
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

export default UploadProjector;
