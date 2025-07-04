import React,{useState,useEffect} from 'react';
import { getFirestore, collection, addDoc,getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import path as necessary



const UploadAmplifiers = () => {
    const [amplifiers, setAmplifiers] = useState([]);

    const amplifierData = [
        {
            "BRAND": "DENON",
            "MODEL": "AVR-X250BT",
            "PRICE": 52900
        },
        {
            "BRAND": "DENON",
            "MODEL": "AVR-X580BT",
            "PRICE": 73900
        },
        {
            "BRAND": "DENON",
            "MODEL": "AVC-A1H",
            "PRICE": 799900
        },
        {
            "BRAND": "DENON",
            "MODEL": "AVC-A10H",
            "PRICE": 599900
        },
        {
            "BRAND": "DENON",
            "MODEL": "AVRX-1800H",
            "PRICE": 104900
        },
        {
            "BRAND": "DENON",
            "MODEL": "AVR-X2800H",
            "PRICE": 144990
        },
        {
            "BRAND": "DENON",
            "MODEL": "AVC-X3800H",
            "PRICE": 209900
        },
        {
            "BRAND": "DENON",
            "MODEL": "AVRX-4800H",
            "PRICE": 299900
        },
        {
            "BRAND": "DENON",
            "MODEL": "AVC-X6800H",
            "PRICE": 469900
        }
    ];

    const handleUpload = async () => {
        try {
            for (const amp of amplifierData) {
                await addDoc(collection(db, 'Amplifiers'), amp);
                console.log('Uploaded:', amp);
            }
            alert('All amplifiers uploaded successfully!');
        } catch (error) {
            console.error('Upload error:', error);
            alert('Failed to upload data.');
        }
    };

    const fetchAmplifiers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Amplifiers'));
            const amps = [];
            querySnapshot.forEach((doc) => {
                amps.push({ id: doc.id, ...doc.data() });
            });
            setAmplifiers(amps);
        } catch (error) {
            console.error('Error fetching amplifiers:', error);
        }
    };

    useEffect(() => {
        fetchAmplifiers();
    }, []);

    return (
        <div className="p-4">
            <button
                onClick={handleUpload}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
                Upload Amplifier Data
            </button>

            <h1 className="text-2xl font-bold mb-4">Amplifier List</h1>
      {amplifiers.length === 0 ? (
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
            {amplifiers.map((amp) => (
              <tr key={amp.id}>
                <td className="border px-4 py-2">{amp.BRAND}</td>
                <td className="border px-4 py-2">{amp.MODEL}</td>
                <td className="border px-4 py-2">₹{amp.PRICE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
        </div>
    );
};

export default UploadAmplifiers;
