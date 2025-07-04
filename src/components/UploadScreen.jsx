import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const UploadScreen = () => {
  const [data, setData] = useState([]);
  const [uploaded, setUploaded] = useState(false);

  const rawData = {
    "16:9": [100, 120, 135, 150, 160, 180],
    "2:3:5": [160.0, 170.0, 200.0, 210.0]
  };

  // Clean null values and sync both arrays
  const cleanData = () => {
    const cleaned235 = rawData["2:3:5"].filter(v => v !== null);
    const cleaned169 = rawData["16:9"].slice(0, cleaned235.length);
    return {
      "16:9": cleaned169,
      "2:3:5": cleaned235
    };
  };

  const uploadData = async () => {
    const cleaned = cleanData();
    try {
      await addDoc(collection(db, 'SignatureScreen'), cleaned);
      alert('Data uploaded successfully!');
      setUploaded(prev => !prev);
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
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          <button
            onClick={uploadData}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
          >
            Upload Cleaned Signature Data
          </button>

          <div className="border p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Cleaned Preview</h3>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
              {JSON.stringify(cleanData(), null, 2)}
            </pre>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">SignatureScreen Data</h2>
          {data.length === 0 ? (
            <p>No data found.</p>
          ) : (
            <div className="space-y-4">
              {data.map((entry, index) => (
                <div key={index} className="border p-3 rounded bg-gray-50 shadow-sm">
                  <p><strong>16:9:</strong> {entry["16:9"]?.join(', ')}</p>
                  <p><strong>2:3:5:</strong> {entry["2:3:5"]?.join(', ')}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default UploadScreen;
