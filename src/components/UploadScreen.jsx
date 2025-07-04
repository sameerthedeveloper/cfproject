import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // ✅ Use your configured db

const UploadScreen = () => {
  const [data, setData] = useState([]);
  const [uploaded, setUploaded] = useState(false);

  const rawData = {
    "16:9": [100, 120, 135, 150, 160, 180],
    "2:3:5": [160.0, 170.0, 200.0, 210.0]
  };

  // 🧹 Clean null values and keep arrays in sync
  const cleanData = () => {
    const cleaned02 = rawData["2:3:5"].filter(v => v !== null);
    const cleaned16 = rawData["16:9"].slice(0, cleaned02.length);
    return {
      "16:9": cleaned16,
      "2:3:5": cleaned02
    };
  };

  const uploadData = async () => {
    const cleaned = cleanData();
    try {
      await addDoc(collection(db, 'SignatureScreen'), cleaned);
      alert('Data uploaded successfully!');
      setUploaded(true);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload data.');
    }
  };

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'SignatureScreen'));
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setData(docs);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [uploaded]);

  return (
    <div className="p-4">
      <button
        onClick={uploadData}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-800"
      >
        Upload Cleaned Signature Data
      </button>

      <h2 className="text-lg font-semibold mb-2">SignatureScreen Data</h2>
      {data.map((entry, index) => (
        <div key={index} className="border p-3 mb-2 rounded bg-gray-50">
          <p><strong>16:9</strong> {entry["16:9"]?.join(', ')}</p>
          <p><strong>2:3:5:</strong> {entry["2:3:5"]?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default UploadScreen;
