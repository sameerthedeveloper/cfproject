// DataEntryPage.jsx
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import SurroundSpeakers from './SurroundSpeakers';
import PdfQuotation from './pdfQuotation'; // Capitalize component name

function DataEntryPage() {
    const [surroundType, setSurroundType] = useState('');
    const [brand, setBrand] = useState('');
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState('home');

    const surroundVersions = [
        { name: "5.1 System", value: "5.1", TrueValue: "5.1" },
        { name: "7.1 System", value: "7.1", TrueValue: "7.1" },
        { name: "7.2 System", value: "7.1", TrueValue: "7.2" },
        { name: "9.1 System", value: "9.1", TrueValue: "9.1"  },
        { name: "9.2 System", value: "9.1", TrueValue: "9.2"  },
        { name: "11.1 System", value: "11.1", TrueValue: "11.1"  },
        { name: "11.2 System", value: "11.1", TrueValue: "11.2"  },
        { name: "13.1 System", value: "13.1", TrueValue: "13.1"  },
        { name: "13.2 System", value: "13.1", TrueValue: "13.2"  },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await getDocs(collection(db, surroundType));
                const formatted = snapshot.docs.map((doc) => doc.data());
                setData(formatted);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        if (surroundType) {
            fetchData();
            setBrand('');
        }
    }, [surroundType]);

    const getUniqueByKey = (arr, key) => {
        const seen = new Set();
        return arr.filter((item) => {
            if (item[key] && !seen.has(item[key])) {
                seen.add(item[key]);
                return true;
            }
            return false;
        });
    };

    return (
        <div className="h-screen bg-white">
            <div className="p-5 border-b shadow sticky top-0 bg-white z-10">
                <h1 className="font-semibold font-stretch-extra-condensed text-3xl">Cinema Focus</h1>
            </div>

            {activeTab === 'home' && (
                <div className='home mb-20 overflow-scroll'>
                    <div className="m-5 p-4 border rounded-xl shadow-md">
                        <h1 className="font-semibold text-md">Choose The Surround Version</h1>
                        <div className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center">
                            <select
                                className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
                                value={surroundType}
                                onChange={(e) => setSurroundType(e.target.value)}
                            >
                                <option disabled value="">Select The Surround Type</option>
                                {surroundVersions.map((item, index) => (
                                    <option key={index} value={item.value}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="m-5 p-4 border rounded-xl shadow-md">
                        <h1 className='font-semibold text-md'>Choose The Brand</h1>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select
                                className='bg-amber-100 w-full text-sm font-medium outline-none text-center'
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            >
                                <option disabled value="">Select The Brand</option>
                                {getUniqueByKey(data, 'BRAND').map((item, i) => (
                                    <option key={`brand-${i}`}>{item.BRAND}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <SurroundSpeakers type={surroundType} brand={brand} />
                </div>
            )}

            {activeTab === 'invoice' && (
                <div className='invoice mb-20'>
                    <div className="m-5 p-4 border rounded-xl shadow-md">
                        <h1 className="font-semibold text-md">Invoice Section</h1>
                        <PdfQuotation />
                    </div>
                </div>
            )}

            <div className="w-full fixed bottom-0 bg-white shadow-xl border-t border-gray-200 z-50 lg:hidden">
                <div className="flex justify-around items-center py-3">
                    <div
                        className={`flex flex-col items-center cursor-pointer ${activeTab === 'home' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                        onClick={() => setActiveTab('home')}
                    >
                        <i className="fa-solid fa-house"></i>
                        <span className="text-sm">Main</span>
                    </div>

                    <div
                        className={`flex flex-col items-center cursor-pointer ${activeTab === 'invoice' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                        onClick={() => setActiveTab('invoice')}
                    >
                        <i className="fa-solid fa-file-invoice-dollar"></i>
                        <span className="text-sm">Invoice</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataEntryPage;
