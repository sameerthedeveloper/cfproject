import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const CONFIG = {
  '5.1': { 'Left & Right': 'LEFT RIGHT', 'Center Speaker': 'CENTER', 'Surround (2 Channel)': 'SURROUND', 'Subwoofer': 'SUB' },
  '7.2': { 'Left & Right': 'LEFT RIGHT', 'Center Speaker': 'CENTER', 'Surround (2 Channel)': 'SURROUND', 'Rear Surround (2 Channel)': 'SURROUND', 'Rear Back Surround': 'SURROUND', 'Atmos': 'ATMOS', 'Subwoofer': 'SUB' },
  '7.1': { 'Left & Right': 'LEFT RIGHT', 'Center Speaker': 'CENTER', 'Surround (2 Channel)': 'SURROUND', 'Rear Surround (2 Channel)': 'SURROUND', 'Subwoofer': 'SUB' },
  '9.1': { 'Left & Right': 'LEFT RIGHT', 'Center Speaker': 'CENTER', 'Surround (2 Channel)': 'SURROUND', 'Rear Surround (2 Channel)': 'SURROUND', 'Rear Back Surround': 'SURROUND', 'Atmos': 'ATMOS', 'Subwoofer': 'SUB' },
  '9.2': { 'Left & Right': 'LEFT RIGHT', 'Center Speaker': 'CENTER', 'Surround (2 Channel)': 'SURROUND', 'Rear Surround (2 Channel)': 'SURROUND', 'Rear Back Surround': 'SURROUND', 'Atmos': 'ATMOS', 'Subwoofer': 'SUB' },
  '11.1': { 'Left & Right': 'LEFT RIGHT', 'Center Speaker': 'CENTER', 'Surround (2 Channel)': 'SURROUND', 'Rear Surround (2 Channel)': 'SURROUND', 'Rear Back Surround': 'SURROUND', 'Atmos': 'ATMOS', 'Subwoofer': 'SUB' },
  '11.2': { 'Left & Right': 'LEFT RIGHT', 'Center Speaker': 'CENTER', 'Surround (2 Channel)': 'SURROUND', 'Rear Surround (2 Channel)': 'SURROUND', 'Rear Back Surround': 'SURROUND', 'Atmos': 'ATMOS', 'Subwoofer': 'SUB' },
  '13.1': { 'Left & Right': 'LEFT RIGHT', 'Center Speaker': 'CENTER', 'Surround (2 Channel)': 'SURROUND', 'Rear Surround (2 Channel)': 'SURROUND', 'Rear Back Surround': 'SURROUND', 'Atmos': 'ATMOS', 'Subwoofer': 'SUB' },
  '13.2': { 'Left & Right': 'LEFT RIGHT', 'Center Speaker': 'CENTER', 'Surround (2 Channel)': 'SURROUND', 'Rear Surround (2 Channel)': 'SURROUND', 'Rear Back Surround': 'SURROUND', 'Atmos': 'ATMOS', 'Subwoofer': 'SUB' }
};

const COMMON_COMPONENTS = ['Amplifier', 'Projector', 'Signature Screen Ratio', 'Signature Screen'];

const collectionMap = {
  'Amplifier': 'Amplifiers',
  'Projector': 'Projectors',
  'Signature Screen': 'SignatureScreen',
  'Signature Screen Ratio': 'SignatureScreen'
};

const SpeakerDropdown = ({ label, options, value, onChange }) => (
  <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
    <h1 className='font-semibold text-md'>{label}</h1>
    <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
      <select
        className='bg-amber-100 w-full text-sm font-medium outline-none text-center'
        value={value}
        onChange={onChange}
      >
        <option value="">Select The Model</option>
        {options.map((item, i) => (
          <option key={`${label}-${i}`} value={item.MODEL}>{item.MODEL}</option>
        ))}
      </select>
    </div>
  </div>
);

function SurroundSpeakers({ type, brand }) {
  const [data, setData] = useState([]);
  const [selections, setSelections] = useState({});
  const [commonOptions, setCommonOptions] = useState({});
  const [selectedRatio, setSelectedRatio] = useState('');

  useEffect(() => {
    setSelections({});
  }, [type, brand]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const snapshot = await getDocs(collection(db, type));
        const formatted = snapshot.docs.map((doc) => doc.data());
        setData(formatted);
      } catch (err) {
        console.error('Error fetching speaker data:', err);
      }
    };

    if (type) fetchModels();
  }, [type, brand]);

  useEffect(() => {
    const fetchCommonData = async () => {
      const results = {};
      let signatureScreenRatios = [];
      let signatureScreenSizes = {};

      for (const comp of COMMON_COMPONENTS) {
        try {
          const snap = await getDocs(collection(db, collectionMap[comp]));

          if (comp === 'Signature Screen') {
            snap.docs.forEach(doc => {
              const data = doc.data();
              Object.entries(data).forEach(([ratio, sizes]) => {
                const clean = sizes.filter(val => val !== null);
                if (clean.length > 0) {
                  if (!signatureScreenRatios.includes(ratio)) {
                    signatureScreenRatios.push(ratio);
                    signatureScreenSizes[ratio] = clean;
                  }
                }
              });
            });

            results["Signature Screen Ratio"] = signatureScreenRatios.map(r => ({ MODEL: r }));
            results["Signature Screen Sizes"] = signatureScreenSizes;

          } else {
            results[comp] = snap.docs.map(doc => doc.data());
          }
        } catch (err) {
          console.error(`Error fetching ${comp}:`, err);
          results[comp] = [];
        }
      }

      setCommonOptions(results);
    };

    fetchCommonData();
  }, []);

  const handleSelectionChange = (label) => (e) => {
    setSelections((prev) => ({ ...prev, [label]: e.target.value }));
  };

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

  const layout = CONFIG[type] || {};

  return (
    <div className='mb-20'>
      {/* Speaker channels */}
      {Object.entries(layout).map(([label, firestoreType]) => (
        <SpeakerDropdown
          key={label}
          label={label}
          options={getModelByBrand(data.filter((item) => item.TYPE === firestoreType), 'MODEL', brand)}
          value={selections[label] || ''}
          onChange={handleSelectionChange(label)}
        />
      ))}

      {/* Amplifier and Projector */}
      {["Amplifier", "Projector"].map((label) => (
        <SpeakerDropdown
          key={label}
          label={label}
          options={commonOptions[label] || []}
          value={selections[label] || ''}
          onChange={handleSelectionChange(label)}
        />
      ))}

      {/* Signature Screen Ratio Selector */}
      <SpeakerDropdown
        key="SignatureScreenRatio"
        label="Signature Screen Ratio"
        options={commonOptions["Signature Screen Ratio"] || []}
        value={selectedRatio}
        onChange={(e) => {
          setSelectedRatio(e.target.value);
          setSelections(prev => ({ ...prev, ["Signature Screen Ratio"]: e.target.value }));
        }}
      />

      {/* Signature Screen Size Selector (based on ratio) */}
      {selectedRatio && (
        <SpeakerDropdown
          key="SignatureScreenSize"
          label={`Screen Sizes for ${selectedRatio}`}
          options={(commonOptions["Signature Screen Sizes"]?.[selectedRatio] || []).map(v => ({ MODEL: v }))}
          value={selections["Signature Screen"] || ''}
          onChange={handleSelectionChange("Signature Screen")}
        />
      )}
    </div>
  );
}

export default SurroundSpeakers;
