// import ScreenSize from "./ScreenSize";


// function Screen({
//   label,
//   ratioList,
//   ratio,
//   setRatio,
//   valueKey,
//   labelKey,
//   ScreenSizeList,
//   selectedScreen,
//   setSelectedScreen
// }) {
//   return (
//     <>
//     <div className="mx-4 mt-1 p-4 border border-gray-400 rounded-xl shadow-md">
//       <h1 className="font-semibold text-md">Choose {label}</h1>
//       <div className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center">
//  <select
//   required
//   className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
//   value={ratio}
//   onChange={(e) => setRatio(e.target.value)}
// >
//   <option value="default">Select The Value</option>
//   {ratioList.map((item, index) => (
//     <option key={index} value={item.ratio}>{item.ratio}</option>
//   ))}
// </select>

//       </div>
//     </div>
// {ratio  && ratio !== 'default' && (
// <div className="mt-3">
//   <ScreenSize
//   label="Screen Size"
//   ScreenSizeList={ScreenSizeList.map((s) => ({ MODEL: s }))}
//   selected={selectedScreen}
//   setSelected={setSelectedScreen}
//   valueKey="MODEL"
//   labelKey="MODEL"
// />

// </div>
// )}

//     </>
//   );
// }

// export default Screen;
