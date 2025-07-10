import React, { useEffect } from "react";
import Speakers from "./Speakers";

function SurroundDropDown({ label, count, setCount, List = [], valueKey, labelKey,selected,setSelected,price,
  setPrice,
  rawprice }) {
  const SurOpts = [
    { label: "Select The Count", value: 0.1 },
    { label: "No Surround", value: 0 },
    { label: "2", value: 2 },
    { label: "4", value: 4 },
  ];

  const AtmosOpts = [
    { label: "Select The Count", value: 0.1 },
    { label: "None", value: 0 },
    { label: "2", value: 2 },
    { label: "4", value: 4 },
    { label: "6", value: 6 },
  ];

  const options = (label || "").toLowerCase().includes("atmos") ? AtmosOpts : SurOpts;

  useEffect(() => {
    if (count === "" || count === undefined) {
      setCount(options[0].value);
    }
  }, [count, setCount, options]);

  const parsedCount = parseFloat(count);

  const shouldShowDiv = parsedCount !== 0 && parsedCount !== 0.1;

  return (
    <>
    <div className="mt-3 mx-3 my-3">
      {/* Count Dropdown */}
      <div className="mx-1 p-4 border border-gray-400 rounded-xl shadow-md">
        <h1 className="font-semibold text-md">{label} Count</h1>
        <div className="mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center">
          <select
            required
            className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
            value={count}
            onChange={(e) => {
              const value = e.target.value;
              const parsed = parseFloat(value);
              setCount(isNaN(parsed) ? 0.1 : parsed);
            }}
          >
            {options.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      
    </div>
    {/* ✅ Conditionally render this div */}
      {shouldShowDiv && (
        <>

            <Speakers
          label={`${label}`}
          List={List}
          selected={selected}
          setSelected={setSelected}
          valueKey={valueKey}
          labelKey={labelKey}
          price={price}
          setPrice={setPrice}
          rawprice={rawprice}
        />

        </>
      )}
    </>
    
  );
}

export default SurroundDropDown;
