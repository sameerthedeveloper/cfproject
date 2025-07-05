import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import SurroundSpeakers from './SurroundSpeakers';
import PdfQuotation from './pdfQuotation';

function DataEntryPage() {
    const [surroundType, setSurroundType] = useState('');
    const [brand, setBrand] = useState('');
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState('home');
    const [speakerSelections, setSpeakerSelections] = useState({});
    const [fullSelectionData, setFullSelectionData] = useState({
        surroundType: '',
        brand: '',
        selections: {}
    });

    const surroundVersions = [
        { name: "5.1 System", value: "5.1" },
        { name: "7.1 System", value: "7.1" },
        { name: "7.2 System", value: "7.2" },
        { name: "9.1 System", value: "9.1" },
        { name: "9.2 System", value: "9.2" },
        { name: "11.1 System", value: "11.1" },
        { name: "11.2 System", value: "11.2" },
        { name: "13.1 System", value: "13.1" },
        { name: "13.2 System", value: "13.2" },
    ];

    // 🔁 Fetch data when surround type is selected
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
            setBrand(''); // Reset brand when surround changes
        }
    }, [surroundType]);

    // 🧠 Utility: Get unique brands
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

    // 🖱 Surround selector
    const handleSurroundTypeChange = (e) => {
        const type = e.target.value;
        setSurroundType(type);
        setFullSelectionData((prev) => ({
            ...prev,
            surroundType: type,
            brand: '',            // Reset brand
            selections: {}        // Reset selections
        }));
    };

    // 🖱 Brand selector
    const handleBrandChange = (e) => {
        const brandName = e.target.value;
        setBrand(brandName);
        setFullSelectionData((prev) => ({
            ...prev,
            brand: brandName
        }));
    };

    // 🔁 Receive selections from child
    const handleSelectionsChange = (newSelections) => {
        setSpeakerSelections(newSelections);
        setFullSelectionData((prev) => ({
            ...prev,
            selections: newSelections
        }));
    };

    useEffect(() => {
        console.log("📦 Full Selection Payload:", fullSelectionData);
    }, [fullSelectionData]);

    return (
        <div className="h-screen bg-white">
            {/* Sticky Header */}
            <div className="p-5 border-b border-gray-200 shadow sticky top-0 bg-white z-10">
                <h1 className="font-semibold text-3xl">Cinema Focus</h1>
            </div>

            {/* Home Tab */}
            {activeTab === 'home' && (
                <div className='home mb-20 overflow-scroll'>
                    {/* Surround Dropdown */}
                    <div className="m-5 p-4 border border-gray-400 rounded-xl shadow-md">
                        <h1 className="font-semibold text-md">Choose The Surround Version</h1>
                        <div className="mt-2 bg-amber-100 p-3 rounded-xl border border-black flex justify-center items-center">
                            <select
                                className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
                                value={surroundType}
                                onChange={handleSurroundTypeChange}
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

                    {/* Brand Dropdown */}
                    <div className="m-5 p-4 border border-gray-400 rounded-xl shadow-md">
                        <h1 className='font-semibold text-md'>Choose The Brand</h1>
                        <div className='mt-2 bg-amber-100 p-3 rounded-xl border border-black flex justify-center items-center'>
                            <select
                                className='bg-amber-100 w-full text-sm font-medium outline-none text-center'
                                value={brand}
                                onChange={handleBrandChange}
                            >
                                <option disabled value="">Select The Brand</option>
                                {getUniqueByKey(data, 'BRAND').map((item, i) => (
                                    <option key={`brand-${i}`}>{item.BRAND}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Surround Configuration Component */}
                    <SurroundSpeakers
                        type={surroundType}
                        brand={brand}
                        onSelectionsChange={handleSelectionsChange}
                    />
                </div>
            )}

            {/* Data Tab */}
            {activeTab === 'data' && (
                <div className='invoice mb-20'>
                    <div className="m-5 p-4 border rounded-xl shadow-md">
                        <h1 className="font-semibold text-md">Data Section</h1>
                        {/* Reserved for future use */}
                    </div>
                </div>
            )}

            {/* Invoice Tab */}
            {activeTab === 'invoice' && (
                <div className='invoice mb-20'>
                    <PdfQuotation data={fullSelectionData} />
                </div>
            )}

            {/* Bottom Navigation */}
            <div className="w-full fixed bottom-0 bg-white shadow-xl border-t border-gray-200 z-50 lg:hidden">
                <div className="flex justify-around items-center py-3">
                    {[
                        { tab: 'home', icon: 'fa-house', label: 'Main' },
                        { tab: 'data', icon: 'fa-file', label: 'Data' },
                        { tab: 'invoice', icon: 'fa-file-invoice-dollar', label: 'Invoice' }
                    ].map(({ tab, icon, label }) => (
                        <div
                            key={tab}
                            className={`flex flex-col items-center cursor-pointer ${activeTab === tab ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <i className={`fa-solid ${icon}`}></i>
                            <span className="text-sm">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DataEntryPage;
