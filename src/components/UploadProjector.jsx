import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // ✅ Adjust this as needed

const UploadProjector = () => {
  const [projectors, setProjectors] = useState([]);

  const ProjectorData = [
  { "BRAND": "SONY", "MODEL": "5000ES", "PRICE": 425000 },
  { "BRAND": "SONY", "MODEL": "7000ES", "PRICE": 1190000 },
  { "BRAND": "SONY", "MODEL": "BRAVIA7", "PRICE": 575000 },
  { "BRAND": "SONY", "MODEL": "BRAVIA9", "PRICE": 1650000 }
];


  const handleUpload = async () => {
    try {
      for (const item of ProjectorData) {
        await addDoc(collection(db, 'Projectors'), item);
        console.log('Uploaded:', item);
      }
      alert('All projectors uploaded successfully!');
      fetchProjectors(); // Refresh list after upload
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload data.');
    }
  };

  const fetchProjectors = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Projectors'));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setProjectors(items);
    } catch (error) {
      console.error('Error fetching projectors:', error);
    }
  };

  useEffect(() => {
    fetchProjectors();
  }, []);

  return (
    <div className="p-4">
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 mb-4"
      >
        Upload Projector Data
      </button>

      <h1 className="text-2xl font-bold mb-4">Projector List</h1>
      {projectors.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Brand</th>
              <th className="border px-4 py-2">Model</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {projectors.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.BRAND}</td>
                <td className="border px-4 py-2">{item.MODEL}</td>
                <td className="border px-4 py-2">₹{item.PRICE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UploadProjector;
