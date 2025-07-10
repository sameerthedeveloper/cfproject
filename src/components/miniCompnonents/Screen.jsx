import React from "react";

function Screen({ ratioList, modellist, ratio, setRatio, valueKey, labelKey }) {
  return (
    <div className="mx-1 p-4 border border-gray-400 rounded-xl shadow-md">
      <h1 className="font-semibold text-md">Choose {label}</h1>
      <div className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center">
        <select
          required
          className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
          value={ratio}
          onChange={(e) => {
            const value = e.target.value;
            setRatio(value);
          }}
        >
          <option value="default">Select The Value</option>
          {ratioList.map((item, index) => (
            <option key={index} value={item[valueKey]}>
              {item[labelKey]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Screen;
