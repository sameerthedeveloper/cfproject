import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import SurroundSpeakers from "../SurroundSpeakers";
import PdfQuotation from "./pdfQuotation";

function DataEntryPage() {
  const [surroundType, setSurroundType] = useState("");
  const [brand, setBrand] = useState("");
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("home");
  const [fullSelectionData, setFullSelectionData] = useState({
    surroundType: "",
    brand: "",
    selections: {},
  });

  const tabs = [
    { tab: "home", icon: "fa-house", label: "Main" },
    { tab: "invoice", icon: "fa-file-invoice-dollar", label: "Invoice" },
  ];
  console.log(fullSelectionData);

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
      setBrand("");
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

  const handleSurroundTypeChange = (e) => {
    const type = e.target.value;
    setSurroundType(type);
    setFullSelectionData((prev) => ({
      ...prev,
      surroundType: type,
      brand: "",
      selections: {},
    }));
  };

  const handleBrandChange = (e) => {
    const brandName = e.target.value;
    setBrand(brandName);
    setFullSelectionData((prev) => ({
      ...prev,
      brand: brandName,
    }));
  };

  const handleSelectionsChange = (newSelections) => {
    setFullSelectionData((prev) => ({
      ...prev,
      selections: newSelections,
    }));
  };

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="p-5 border-b border-gray-200 bg-white shadow sticky top-0 z-10">
        <h1 className="font-semibold text-3xl">Cinema Focus</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col lg:flex-row overflow-hidden">
        {/* Home Section (visible always on lg, tab-controlled on mobile) */}
        {(activeTab === "home" || window.innerWidth >= 1024) && (
          <div className="home w-full lg:w-1/2 overflow-auto mb-[80px] lg:mb-0 p-4">
            <div className="mb-4 p-4 border border-gray-400 rounded-xl shadow-md">
              <h1 className="font-semibold text-md">
                Choose The Surround Version
              </h1>
              <div className="mt-2 bg-amber-100 p-3 rounded-xl border border-black flex justify-center items-center">
                <select
                  className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
                  value={surroundType}
                  onChange={handleSurroundTypeChange}
                >
                  <option disabled value="">
                    Select The Surround Type
                  </option>
                  {surroundVersions.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4 p-4 border border-gray-400 rounded-xl shadow-md">
              <h1 className="font-semibold text-md">Choose The Brand</h1>
              <div className="mt-2 bg-amber-100 p-3 rounded-xl border border-black flex justify-center items-center">
                <select
                  className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
                  value={brand}
                  onChange={handleBrandChange}
                >
                  <option disabled value="">
                    Select The Brand
                  </option>
                  {getUniqueByKey(data, "BRAND").map((item, i) => (
                    <option key={`brand-${i}`}>{item.BRAND}</option>
                  ))}
                </select>
              </div>
            </div>

            <SurroundSpeakers
              type={surroundType}
              brand={brand}
              initialSelections={fullSelectionData.selections}
              onSelectionsChange={handleSelectionsChange}
            />
          </div>
        )}

        {/* Invoice Section (visible always on lg, tab-controlled on mobile) */}
        {(activeTab === "invoice" || window.innerWidth >= 1024) && (
          <div className="invoice w-full lg:w-1/2 overflow-auto mb-[80px] lg:mb-0 p-4">
            <PdfQuotation data={fullSelectionData} />
          </div>
        )}
      </div>

      {/* Bottom Navigation (Mobile only) */}
      <div className="w-full fixed bottom-0 bg-white shadow-xl border-t border-gray-200 z-50 lg:hidden">
        <div className="flex justify-around items-center py-3">
          {tabs.map(({ tab, icon, label }) => (
            <div
              key={tab}
              className={`flex flex-col items-center cursor-pointer ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
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
