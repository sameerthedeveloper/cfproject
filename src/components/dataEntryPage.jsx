import { useState, useEffect } from 'react'
import SurroundSpeakers from './SurroundSpeakers';
import { db } from '../firebase'; // Adjust the import path as necessary
import { getFirestore, collection, getDocs } from 'firebase/firestore';



function dataEntryPage() {
    const [surroundType, setSurroundType] = useState('');
    const [data, setData] = useState([]);
    const [brand, setBrand] = useState();

    
    // const { type } = useParams(); // ✅ use lowercase 'type'


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

    // React way to handle tab switching
    const [activeTab, setActiveTab] = useState('home');


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
  


    // Show/hide sections based on activeTab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className="h-screen bg-white">
                {/* <!-- Header --> */}
                <div className="p-5 w-[100%] border-b-1 border-gray-300 shadow-lg sticky top-0 bg-white z-10">
                    <h1 className="font-semibold text-3xl font-stretch-extra-condensed">Cinema Focus</h1>
                </div>
                {/* Home */}
                {activeTab === 'home' && (
                    <>
                        <div className='home mb-20 overflow-scroll '>
                            <div className="m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md">
                                <div>
                                    <h1 className="font-semibold text-md">Choose The Surround Version</h1>
                                </div>
                                <div>
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
                                </div>
                            </div>

                            <div className="m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md">
                                <div>
                                    <h1 className='font-semibold text-md'>Choose The Brand</h1>
                                </div>
                                <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                                    <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center' id="" onChange={(e) => setBrand(e.target.value)}>
                                        <option disabled selected>Select The Brand </option>
                                        {getUniqueByKey(data, 'BRAND').map((item, i) => (

                                            <option key={`brand-${i}`} className="mb-4 p-4 border rounded shadow">
                                                {item.BRAND}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'></div> */}
                            <SurroundSpeakers type={surroundType} brand={brand} />


                        </div>

                    </>
                )}
                {/* Invoice */}
                {activeTab === 'invoice' && (
                    <div className='quta'>
                        {/* Invoice content goes here */}
                        <div className="m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md">
                            <h1 className="font-semibold text-md">Invoice Section</h1>
                        </div>
                    </div>
                )}
                {/* <!-- Footer --> */}
                {/* <!-- Bottom Navigation Bar with Icons --> */}
                <div className="w-full fixed bottom-0 bg-white shadow-xl border-t border-gray-200 z-50  lg:hidden">
                    <div className="flex justify-around items-center py-3">

                        {/* <!-- Home Tab --> */}
                        <div
                            className={`flex flex-col items-center cursor-pointer item home ${activeTab === 'home' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                            onClick={() => handleTabClick('home')}
                        >
                            <i className="fa-solid fa-house"></i>
                            <span className="text-sm">Main</span>
                        </div>

                        {/* <!-- Invoices Tab --> */}
                        <div
                            className={`flex flex-col items-center cursor-pointer item invoice ${activeTab === 'invoice' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                            onClick={() => handleTabClick('invoice')}
                        >
                            <i className="fa-solid fa-file-invoice-dollar"></i>
                            <span className="text-sm">Invoice</span>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default dataEntryPage