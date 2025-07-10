import React from "react";

function Speakers({
  label,
  selected,
  setSelected,
  List,
  valueKey = "value",
  labelKey = "name",
  price,
  setPrice,
  rawprice,
}) {
  return (
    <div className="mt-3 mx-3 my-3">
      <div className="mx-1 p-4 border border-gray-400 rounded-xl shadow-md">
        <h1 className="font-semibold text-md">Choose {label}</h1>
        <div className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center">
          <select
            required
            className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
            value={selected}
            onChange={(e) => {
              const value = e.target.value;
              setSelected(value);

              if (setPrice) {
                const selectedItem = List.find(
                  (item) => item[valueKey] === value
                );
                setPrice(selectedItem?.PRICE || 0); // ✅ raw price saved to state
              }
            }}
          >
            <option value="default">Select The Value</option>
            {List.map((item, index) => (
              <option key={index} value={item[valueKey]}>
                {item[labelKey]}
              </option>
            ))}
          </select>
        </div>
        {label !== "Brand" && label !== "Surround Version" && (
          <>
            <h1 className="font-semibold text-md mt-2">{label} Price</h1>
            <div className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center">
              {price != 0 && price ? (
                <p>{price}</p>
              ) : (
                <p className="text-gray-400">{label} Price</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Speakers;
