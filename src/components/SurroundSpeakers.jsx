import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

// Speaker layout config by type
const CONFIG = {
  '5.1': {
    'Left & Right': 'LEFT RIGHT',
    'Center Speaker': 'CENTER',
    'Surround': 'SURROUND',
    'Subwoofer': 'SUB',
  },
  '7.1': {
    'Left & Right': 'LEFT RIGHT',
    'Center Speaker': 'CENTER',
    'Surround': 'SURROUND',
    'Rear Surround': 'SURROUND',
    'Rear Back Surround': 'SURROUND',
    'Atmos': 'ATMOS',
    'Subwoofer': 'SUB',
  },
  '7.2': {
    'Left & Right': 'LEFT RIGHT',
    'Center Speaker': 'CENTER',
    'Surround': 'SURROUND',
    'Rear Surround': 'SURROUND',
    'Subwoofer': 'SUB',
  },
    '9.1': {
    'Left & Right': 'LEFT RIGHT',
    'Center Speaker': 'CENTER',
    'Surround': 'SURROUND',
    'Rear Surround': 'SURROUND',
    'Rear Back Surround': 'SURROUND',
    'Atmos': 'ATMOS',
    'Subwoofer': 'SUB',
  },
    '9.2': {
    'Left & Right': 'LEFT RIGHT',
    'Center Speaker': 'CENTER',
    'Surround': 'SURROUND',
    'Rear Surround': 'SURROUND',
    'Rear Back Surround': 'SURROUND',
    'Atmos': 'ATMOS',
    'Subwoofer': 'SUB',
    },
    '11.1': {
    'Left & Right': 'LEFT RIGHT',
    'Center Speaker': 'CENTER',
    'Surround': 'SURROUND',
    'Rear Surround': 'SURROUND',
    'Rear Back Surround': 'SURROUND',
    'Atmos': 'ATMOS',
    'Subwoofer': 'SUB',
  },
    '11.2': {
    'Left & Right': 'LEFT RIGHT',
    'Center Speaker': 'CENTER',     
    'Surround': 'SURROUND',
    'Rear Surround': 'SURROUND',
    'Rear Back Surround': 'SURROUND',
    'Atmos': 'ATMOS',
    'Subwoofer': 'SUB',
  },
  '13.1': {
    'Left & Right': 'LEFT RIGHT',
    'Center Speaker': 'CENTER',
    'Surround': 'SURROUND',
    'Rear Surround': 'SURROUND',
    'Rear Back Surround': 'SURROUND',
    'Atmos': 'ATMOS',
    'Subwoofer': 'SUB',
  },
  '13.2': {
    'Left & Right': 'LEFT RIGHT',
    'Center Speaker': 'CENTER', 
    'Surround': 'SURROUND',
    'Rear Surround': 'SURROUND',
    'Rear Back Surround': 'SURROUND',
    'Atmos': 'ATMOS',
    'Subwoofer': 'SUB',
  }
};

const COMMON_COMPONENTS = ['Amplifier', 'Projector', 'Signature Screen'];

const SpeakerDropdown = ({ label, options, value, onChange }) => (
  <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
    <div>
      <h1 className='font-semibold text-md'>{label}</h1>
    </div>
    <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
      <select
        className='bg-amber-100 w-full text-sm font-medium outline-none text-center'
        value={value}
        onChange={onChange}
      >
        <option disabled value="">Select The Model</option>
        {options.map((item, i) => (
          <option key={`${label}-${i}`} value={item.MODEL}>
            {item.MODEL}
          </option>
        ))}
      </select>
    </div>
  </div>
);

function SurroundSpeakers({ type, brand }) {
  const [data, setData] = useState([]);
  const [selections, setSelections] = useState({});



  useEffect(() => {
    const fetchModels = async () => {
      try {
        const snapshot = await getDocs(collection(db, type));
        const formatted = snapshot.docs.map((doc) => doc.data());
        setData(formatted);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    if (type) fetchModels();
}, [type, brand]); // ✅ Re-fetch on both


  const getModelByBrand = (arr, key, brand) => {
    const seen = new Set();
    return arr.filter((item) => {
      if (item[key] && item.BRAND === brand && !seen.has(item[key])) {
        seen.add(item[key]);
        return true;
      }
      return false;
    });
  };

  const handleSelectionChange = (label) => (e) => {
    setSelections((prev) => ({
      ...prev,
      [label]: e.target.value,
    }));
  };

  const layout = CONFIG[type] || {};

  return (
    <div className='mb-20'>

      {/* Main speaker layout */}
      {Object.entries(layout).map(([label, firestoreType]) => (
        <SpeakerDropdown
          key={label}
          label={label}
          options={getModelByBrand(data.filter((item) => item.TYPE === firestoreType), 'MODEL', brand)}
          value={selections[label] || ''}
          onChange={handleSelectionChange(label)}
        />
      ))}

      {/* Common components (hardcoded dropdowns for now) */}
      {COMMON_COMPONENTS.map((label) => (
        <SpeakerDropdown
          key={label}
          label={label}
          options={[]} // Add fetching logic if needed
          value=""
          onChange={() => {}}
        />
      ))}

    </div>
  );
}

export default SurroundSpeakers;
