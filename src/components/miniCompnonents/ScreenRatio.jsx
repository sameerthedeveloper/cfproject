import { useEffect } from "react";
import ScreenSize from "./ScreenSize";


function ScreenRatio({
  label,
  List,
  screenRatioValue,
  setScreenRatio,
  ModelList,
  SelectedModel,
  setselectedModel,
  price,
  setPrice,
  setLens,
  labelkey,
  valuekey,
  LabelKey,
  ValueKey,
  GetUnique,
  GetSize,
}) {
  const list = GetUnique(List, "ratio");
  const sizeList = GetSize(List, "size", screenRatioValue);
  
  useEffect(()=>{
    console.log(sizeList);
    console.log(List);
    
    
  })

  return (
    <>
      <div className="mt-3 mx-3 my-3">
        <div className="mx-1 p-4 border border-gray-400 rounded-xl shadow-md">
          <h1 className="font-semibold text-md">Choose {label}</h1>
          <div className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center">
            <select
              required
              className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
              value={screenRatioValue}
              onChange={(e) => {
                const value = e.target.value;
                setScreenRatio(value);
              }}
            >
              <option value="default">Select The Value</option>
              {list.map((item, index) => (
                <option key={index} value={item[valuekey]}>
                  {item[labelkey]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {screenRatioValue && (
        <ScreenSize
          label={"Screen Size"}
          setsize={setselectedModel}
          Size={SelectedModel}
          List={sizeList}
          valueKey={ValueKey}
          labelKey={LabelKey}
        />
      )}
    </>
  );
}

export default ScreenRatio;
