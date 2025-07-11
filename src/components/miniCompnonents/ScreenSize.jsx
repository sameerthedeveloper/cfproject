import React from "react";

function ScreenSize({
  label,
  List,
  Size,
  setsize,
  valueKey,
  labelKey,
}) {

  return (
    <div className="mt-3 mx-3 my-3">
      <div className="mx-1 p-4 border border-gray-400 rounded-xl shadow-md">
        <h1 className="font-semibold text-md">Choose {label}</h1>
        <div className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center">
          <select
            required
            className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
            value={Size}
            onChange={(e) => {
              const value = e.target.value;
              setsize(value); // or Number(value) if numeric
            }}
          >
            <option value="default"  disabled>
              Select The Value
            </option>

            {Array.isArray(List) &&
              List.map((item, index) => (
                <option key={index} value={item[valueKey]}>
                  {item[labelKey]}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ScreenSize;
