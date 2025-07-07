import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

const formatPrice = (price) => {
  if (!price) return "";
  return new Intl.NumberFormat("en-IN").format(price);
};

const surroundTypes = [
  "5.1",
  "7.1",
  "7.2",
  "9.1",
  "9.2",
  "11.1",
  "11.2",
  "13.1",
  "13.2",
];

const UploadSurround = () => {
  const [items, setItems] = useState([]);
  const [customItem, setCustomItem] = useState({
    surround: "",
    BRAND: "",
    MODEL: "",
    TYPE: "",
    PRICE: "",
    COUNT: "",
  });
  const [jsonInput, setJsonInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSurround, setSelectedSurround] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");

  const fetchData = async () => {
    const results = [];
    for (const type of surroundTypes) {
      const snapshot = await getDocs(collection(db, type));
      snapshot.forEach((docSnap) => {
        results.push({ id: docSnap.id, surround: type, ...docSnap.data() });
      });
    }
    setItems(results);
  };

  const handleCustomUpload = async () => {
    const { surround, BRAND, MODEL, TYPE, PRICE, COUNT } = customItem;
    if (!surround || !BRAND || !MODEL || !TYPE || !PRICE || !COUNT) {
      alert("Please fill all fields");
      return;
    }
    try {
      await addDoc(collection(db, surround), {
        BRAND,
        MODEL,
        TYPE,
        PRICE: parseFloat(PRICE),
        COUNT,
      });
      alert("✅ Custom speaker added!");
      setCustomItem({
        surround: "",
        BRAND: "",
        MODEL: "",
        TYPE: "",
        PRICE: "",
        COUNT: "",
      });
      fetchData();
    } catch (error) {
      console.error("Custom upload failed:", error);
      alert("❌ Failed to add custom speaker.");
    }
  };

  const brandList = [
    "All",
    ...new Set(
      items
        .filter(
          (i) => selectedSurround === "All" || i.surround === selectedSurround
        )
        .map((i) => i.BRAND)
        .filter(Boolean)
    ),
  ];

  const handleJsonUpload = async () => {
    try {
      const parsed = JSON.parse(jsonInput);
      for (const [surroundType, groups] of Object.entries(parsed)) {
        for (const group of groups) {
          for (const item of group) {
            if (
              !item.BRAND ||
              !item.MODEL ||
              !item.TYPE ||
              !item.PRICE ||
              !item.COUNT
            ) {
              alert("Invalid JSON format.");
              return;
            }
            await addDoc(collection(db, surroundType), item);
          }
        }
      }
      alert("✅ JSON uploaded!");
      setJsonInput("");
      fetchData();
    } catch (err) {
      console.error("JSON Upload Error:", err);
      alert("❌ Invalid JSON input.");
    }
  };

  const handleDelete = async (id, surround) => {
    try {
      await deleteDoc(doc(db, surround, id));
      fetchData();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const filteredItems = items.filter((item) => {
    const matchModel = item.MODEL?.toLowerCase().includes(
      searchTerm.toLowerCase()
    );
    const matchSurround =
      selectedSurround === "All" || item.surround === selectedSurround;
    const matchBrand = selectedBrand === "All" || item.BRAND === selectedBrand;
    return matchModel && matchSurround && matchBrand;
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 h-screen w-full  mx-auto">
      <div className="flex w-full flex-col lg:flex-row gap-6">
        {/* LEFT COLUMN */}
        <div className="lg:w-1/2  space-y-6">
          <h1 className="text-3xl font-bold mb-4">Upload Surround Speakers</h1>

          {/* Custom Upload */}
          <div className="border p-4 rounded shadow bg-white space-y-2">
            <h2 className="text-lg font-semibold">Add Custom Speaker</h2>
            {["surround", "BRAND", "MODEL", "TYPE", "PRICE", "COUNT"].map(
              (field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field}
                  value={customItem[field]}
                  onChange={(e) =>
                    setCustomItem((prev) => ({
                      ...prev,
                      [field]: e.target.value,
                    }))
                  }
                  className="w-full border p-2 rounded"
                />
              )
            )}
            <button
              onClick={handleCustomUpload}
              className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-800"
            >
              Add Speaker
            </button>
          </div>

          {/* JSON Upload */}
          <div className="border p-4 rounded shadow bg-white">
            <h2 className="text-lg font-semibold mb-2">Upload via JSON</h2>
            <textarea
              rows={6}
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder={`{\n  "5.1": [[\n    {"BRAND": "Sony", "MODEL": "SS-CS3", "TYPE": "LEFT RIGHT", "PRICE": 29999, "COUNT": "PAIR"}\n  ]]\n}`}
              className="w-full border p-2 rounded font-mono"
            />
            <button
              onClick={handleJsonUpload}
              className="mt-2 bg-purple-600 text-white px-4 py-2 rounded w-full hover:bg-purple-800"
            >
              Upload JSON
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:w-1/2  space-y-4 h-screen">
          <h2 className="text-2xl font-bold">Surround Speaker List</h2>

          {/* Search/Filter */}
          <div className="flex flex-wrap gap-4 mb-2">
            <input
              type="text"
              placeholder="Search by model"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-auto flex-1 border px-3 py-2 rounded"
            />
            <select
              value={selectedSurround}
              onChange={(e) => setSelectedSurround(e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="All">All Surround</option>
              {surroundTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="border px-3 py-2 rounded"
            >
              {brandList.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Data Table */}
          {filteredItems.length === 0 ? (
            <p>No matching data found.</p>
          ) : (
            <div className="h-[85%] border-1 border-gray-400 shadow-lg rounded w-full  bg-white overflow-scroll ">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border px-3 py-2">Surround</th>
                    <th className="border px-3 py-2">Brand</th>
                    <th className="border px-3 py-2">Model</th>
                    <th className="border px-3 py-2">Type</th>
                    <th className="border px-3 py-2">Price</th>
                    <th className="border px-3 py-2">Count</th>
                    <th className="border px-3 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item) => (
                    <tr key={item.id}>
                      <td className="border px-3 py-2">{item.surround}</td>
                      <td className="border px-3 py-2">{item.BRAND}</td>
                      <td className="border px-3 py-2">{item.MODEL}</td>
                      <td className="border px-3 py-2">{item.TYPE}</td>
                      <td className="border px-3 py-2">
                        ₹{formatPrice(item.PRICE)}
                      </td>
                      <td className="border px-3 py-2">{item.COUNT}</td>
                      <td className="border px-3 py-2">
                        <button
                          onClick={() => handleDelete(item.id, item.surround)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadSurround;
