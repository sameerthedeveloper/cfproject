import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // ✅ correct import
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJLLh74xMFOLwl67agdd6imcl3ZIglBG8",
  authDomain: "cinemafocusinventory.firebaseapp.com",
  projectId: "cinemafocusinventory",
  storageBucket: "cinemafocusinventory.firebasestorage.app",
  messagingSenderId: "232322170393",
  appId: "1:232322170393:web:296907062efd7ec75a7488",
  measurementId: "G-23G7G2N3PX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Surround() {
  const [data, setData] = useState([]);
  const [LR, setLR] = useState();
  const [center, setCenter] = useState();
  const [surround, setSurround] = useState();
  const [sub, setSub] = useState();
  const [brand, setBrand] = useState();
  // const { type } = useParams(); // ✅ use lowercase 'type'
  const [surroundType, setSurroundType] = useState('');

  const surroundVersions = [
    { name: "5.1 System", value: "5.1" },
    { name: "7.1 System", value: "7.1" },
    { name: "7.2 System", value: "7.1" },
    { name: "9.1 System", value: "9.1" },
    { name: "9.2 System", value: "9.1" },
    { name: "11.1 System", value: "11.1" },
    { name: "11.2 System", value: "11.1" },
    { name: "13.1 System", value: "13.1" },
    { name: "13.2 System", value: "13.1" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, surroundType));
        const formatted = snapshot.docs.map(doc => doc.data());
        setData(formatted);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    if (surroundType) fetchData();
  }, [surroundType]);

  // Helper to get unique values by key
  const getUniqueByKey = (arr, key) => {
    const seen = new Set();
    return arr.filter(item => {
      if (item[key] && !seen.has(item[key])) {
        seen.add(item[key]);
        return true;
      }
      return false;
    });
  };

  // Helper to get unique values by key
  const getModelByBrand = (arr, key, brand) => {
    const seen = new Set();
    return arr.filter(item => {
      if (item[key] && item.BRAND === brand && !seen.has(item[key])) {
        seen.add(item[key]);
        return true;
      }
      return false;
    });
  };


  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">{surroundType} Surround System</h2>
      <div
        className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center ">
        <select className="bg-amber-100 w-full text-sm font-medium outline-none text-center " id="surroundType" onChange={(e) => setSurroundType(e.target.value)}>
          <option disabled selected>Select The Surround Type</option>
          {surroundVersions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}

        </select>
      </div>

      <p className='font-semibold'>Brands</p>

      <select name="" id="" value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option disabled>Select The Brand</option>
        {getUniqueByKey(data, 'BRAND').map((item, i) => (

          <option key={`brand-${i}`} className="mb-4 p-4 border rounded shadow">
            {item.BRAND}
          </option>
        ))}
      </select>

      <p className="font-semibold">Center</p>
      <select name="" id="" value={center} onChange={(e) => setCenter(e.target.value)}>
        <option disabled>Select The Model</option>

        {getModelByBrand(data.filter(item => item.TYPE === 'CENTER'), 'MODEL', brand).map((item, i) => (
          <option key={`center-${i}`} className="mb-4 p-4 border rounded shadow">
            {item.MODEL}
          </option>
        ))}
      </select>

      <p className="font-semibold">L&R</p>
      <select name="" id="" value={LR} onChange={(e) => setCenter(e.target.value)}>
        <option disabled>Select The Model</option>

        {getModelByBrand(data.filter(item => item.TYPE === 'LEFT RIGHT'), 'MODEL', brand).map((item, i) => (
          <option key={`lr-${i}`} className="mb-4 p-4 border rounded shadow">
            {item.MODEL}
          </option>
        ))}
      </select>


      <p className="font-semibold">Surround</p>
      <select name="" id="" value={surround} onChange={(e) => setSurround(e.target.value)}>
        <option disabled>Select The Model</option>

        {getModelByBrand(data.filter(item => item.TYPE === 'SURROUND'), 'MODEL', brand).map((item, i) => (
          <option key={`surround-${i}`} className="mb-4 p-4 border rounded shadow">
            {item.MODEL}
          </option>
        ))}
      </select>

      <p className="font-semibold">Sub</p>
      <select name="" id="" value={sub} onChange={(e) => setSub(e.target.value)}>
        <option disabled>Select The Model</option>

        {getModelByBrand(data.filter(item => item.TYPE === 'SUB'), 'MODEL', brand).map((item, i) => (
          <option key={`sub-${i}`} className="mb-4 p-4 border rounded shadow">
            {item.MODEL}
          </option>

        ))}
      </select>

      <p className="font-semibold">Atmos</p>
      <select name="" id="" value={sub} onChange={(e) => setSub(e.target.value)}>
        <option disabled>Select The Model</option>

        {getModelByBrand(data.filter(item => item.TYPE === 'ATMOS'), 'MODEL', brand).map((item, i) => (
          <option key={`sub-${i}`} className="mb-4 p-4 border rounded shadow">
            {item.MODEL}
          </option>

        ))}
      </select>


    </div>
  );
}

export default Surround;
