// src/components/UploadSurroundData.jsx
import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import surroundData from '../assets/surroundData.json'; // Updated JSON with BRAND in every item

const UploadSurround = () => {
  const uploadToFirestore = async () => {
    try {
      for (const [surroundType, groups] of Object.entries(surroundData)) {
        for (const group of groups) {
          for (const item of group) {
            await addDoc(collection(db, surroundType), item);
            console.log(`Uploaded to ${surroundType}:`, item);
          }
        }
      }
      alert('✅ Upload complete!');
    } catch (error) {
      console.error('❌ Upload failed:', error);
      alert('❌ Upload failed. Check console for details.');
    }
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded shadow"
        onClick={uploadToFirestore}
      >
        Upload JSON to Firestore
      </button>
    </div>
  );
};

export default UploadSurround;
