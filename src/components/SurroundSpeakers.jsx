import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const CONFIG = {
  5.1: {
    "Left & Right": "LEFT RIGHT",
    "Center Speaker": "CENTER",
    "Surround (2 Channel)": "SURROUND",
    Subwoofer: "SUB",
  },
  7.1: {
    "Left & Right": "LEFT RIGHT",
    "Center Speaker": "CENTER",
    "Surround (2 Channel)": "SURROUND",
    "Rear Surround (2 Channel)": "SURROUND",
    Subwoofer: "SUB",
  },
  7.2: {
    "Left & Right": "LEFT RIGHT",
    "Center Speaker": "CENTER",
    "Surround (2 Channel)": "SURROUND",
    "Rear Surround (2 Channel)": "SURROUND",
    Atmos: "ATMOS",
    Subwoofer: "SUB",
  },
  9.1: {
    "Left & Right": "LEFT RIGHT",
    "Center Speaker": "CENTER",
    "Surround (2 Channel)": "SURROUND",
    "Rear Surround (2 Channel)": "SURROUND",
    "Rear Back Surround": "SURROUND",
    Atmos: "ATMOS",
    Subwoofer: "SUB",
  },
  9.2: {
    "Left & Right": "LEFT RIGHT",
    "Center Speaker": "CENTER",
    "Surround (2 Channel)": "SURROUND",
    "Rear Surround (2 Channel)": "SURROUND",
    "Rear Back Surround": "SURROUND",
    Atmos: "ATMOS",
    Subwoofer: "SUB",
  },
  11.1: {
    "Left & Right": "LEFT RIGHT",
    "Center Speaker": "CENTER",
    "Surround (2 Channel)": "SURROUND",
    "Rear Surround (2 Channel)": "SURROUND",
    "Rear Back Surround": "SURROUND",
    Atmos: "ATMOS",
    Subwoofer: "SUB",
  },
  11.2: {
    "Left & Right": "LEFT RIGHT",
    "Center Speaker": "CENTER",
    "Surround (2 Channel)": "SURROUND",
    "Rear Surround (2 Channel)": "SURROUND",
    "Rear Back Surround": "SURROUND",
    Atmos: "ATMOS",
    Subwoofer: "SUB",
  },
  13.1: {
    "Left & Right": "LEFT RIGHT",
    "Center Speaker": "CENTER",
    "Surround (2 Channel)": "SURROUND",
    "Rear Surround (2 Channel)": "SURROUND",
    "Rear Back Surround": "SURROUND",
    Atmos: "ATMOS",
    Subwoofer: "SUB",
  },
  13.2: {
    "Left & Right": "LEFT RIGHT",
    "Center Speaker": "CENTER",
    "Surround (2 Channel)": "SURROUND",
    "Rear Surround (2 Channel)": "SURROUND",
    "Rear Back Surround": "SURROUND",
    Atmos: "ATMOS",
    Subwoofer: "SUB",
  },
};

const COMMON_COMPONENTS = [
  "Amplifier",
  "Projector",
  "Signature Screen Ratio",
  "Signature Screen",
];
const collectionMap = {
  Amplifier: "Amplifiers",
  Projector: "Projectors",
  "Signature Screen": "SignatureScreen",
  "Signature Screen Ratio": "SignatureScreen",
};

const SpeakerDropdown = ({ label, options, value, onChange, price }) => (
  <div className="m-5 p-4 border border-gray-400 rounded-xl shadow-md">
    <h1 className="font-semibold text-md">{label}</h1>
    <div className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center">
      <select
        required
        className="bg-amber-100 w-full text-sm font-medium outline-none text-center"
        value={value || ""}
        onChange={onChange}
      >
        <option value="default">Select</option>
        {label === "Atmos" && <option value="none">No Atmos</option>}
        {label === "Rear Back Surround" && <option value="none">None</option>}
        {label === "Signature Screen Ratio" && (
          <option value="none">No Screen</option>
        )}
        {label === "Projector Brand" && (
          <option value="none">No Projector</option>
        )}
        {options.map((item, i) => (
          <option key={`${label}-${item.MODEL}-${i}`} value={item.MODEL}>
            {item.MODEL}
          </option>
        ))}
      </select>
    </div>
    {label !== "Projector Brand" &&
      label !== "Signature Screen Ratio" &&
      label !== `Screen Sizes for 16:9` &&
      label !== `Screen Sizes for 2:3:5` && (
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
);

function SurroundSpeakers({
  type,
  brand,
  onSelectionsChange,
  initialSelections = {},
}) {
  const [selections, setSelections] = useState({});
  const [data, setData] = useState([]);
  const [commonOptions, setCommonOptions] = useState({});
  const [selectedRatio, setSelectedRatio] = useState("default");
  const [projectorSelection, setProjectorSelection] = useState("default");

  const layout = CONFIG[type] || {};

  useEffect(() => {
    setSelections(initialSelections || {});
    setSelectedRatio(initialSelections["Signature Screen Ratio"] || "default");
    setProjectorSelection(initialSelections["Projector"] || "default");
  }, [type, brand]);

  useEffect(() => {
    if (onSelectionsChange) onSelectionsChange(selections);
  }, [selections]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const snapshot = await getDocs(collection(db, type));
        const formatted = snapshot.docs.map((doc) => doc.data());
        setData(formatted);
      } catch (err) {
        console.error("Error fetching speaker data:", err);
      }
    };
    if (type) fetchModels();
  }, [type]);

useEffect(() => {
  const fetchCommonData = async () => {
    try {
      const snap = await getDocs(collection(db, "SignatureScreenSizes"));
      const screenRatios = new Set();
      const screenSizes = {};

      snap.docs.forEach((doc) => {
        const data = doc.data(); // Example: { ratio: "16:9", sizes: [100, 120] } OR { ratio: "16:9", size: 120 }

        const ratio = data.ratio || Object.keys(data)[0];
        const rawSizes = data.sizes || data.size || data[ratio];

        if (!ratio) {
          console.warn("Missing ratio in:", data);
          return;
        }

        screenRatios.add(ratio);

        const sizesArray = Array.isArray(rawSizes)
          ? rawSizes
          : typeof rawSizes === "number" || typeof rawSizes === "string"
          ? [rawSizes]
          : [];

        const clean = sizesArray.filter((v) => v != null);

        if (!screenSizes[ratio]) screenSizes[ratio] = [];
        screenSizes[ratio].push(...clean);
      });

      // Optional: remove duplicates and sort each size list
      Object.keys(screenSizes).forEach((ratio) => {
        screenSizes[ratio] = [...new Set(screenSizes[ratio])].sort((a, b) => a - b);
      });

      setCommonOptions((prev) => ({
        ...prev,
        "Signature Screen Ratio": [...screenRatios].map((r) => ({ MODEL: r })),
        "Signature Screen Sizes": screenSizes,
      }));
    } catch (err) {
      console.error("Error fetching SignatureScreenSizes:", err);
    }
  };

  fetchCommonData();
}, []);


  const handleSelectionChange = (label) => (e) => {
    setSelections((prev) => ({
      ...prev,
      [label]: e.target.value,
    }));
  };

  const getModelByBrand = (arr, key, brand) => {
    const seen = new Set();
    return arr.filter((item) => {
      if (item[key] && item.BRAND === brand && !seen.has(item[key])) {
        seen.add(item[key]);
        return true;
      }
      return false;
    });
  };

  const getPriceByModel = (arr, key, brand, model) => {
    const seen = new Set();
    return arr.filter((item) => {
      if (
        item[key] &&
        item.BRAND === brand &&
        item.MODEL === model &&
        !seen.has(item[key])
      ) {
        seen.add(item[key]);
        return true;
      }
      return false;
    });
  };

  const formatPrice = (price) => {
    if (price === null || price === undefined) return "";
    return new Intl.NumberFormat("en-IN").format(price);
  };

  return (
    <div className="mb-20">
      {Object.entries(layout).map(([label, firestoreType]) => (
        <SpeakerDropdown
          key={label}
          label={label}
          options={getModelByBrand(
            data.filter((item) => item.TYPE === firestoreType),
            "MODEL",
            brand
          )}
          value={selections[label] || ""}
          onChange={handleSelectionChange(label)}
          price={formatPrice(
            getPriceByModel(
              data.filter((item) => item.TYPE === firestoreType),
              "PRICE",
              brand,
              selections[label] || ""
            )[0]?.PRICE || ""
          )}
        />
      ))}

      <SpeakerDropdown
        label="Amplifier"
        options={commonOptions["Amplifier"] || []}
        value={selections["Amplifier"] || ""}
        onChange={handleSelectionChange("Amplifier")}
      />

      <SpeakerDropdown
        label="Projector Brand"
        options={[
          ...new Set((commonOptions["Projector"] || []).map((p) => p.BRAND)),
        ].map((b) => ({ MODEL: b }))}
        value={selections["Projector Brand"] || ""}
        onChange={(e) => {
          const brand = e.target.value;
          setSelections((prev) => ({
            ...prev,
            "Projector Brand": brand,
            Projector: "",
          }));
        }}
      />

      {selections["Projector Brand"] &&
        selections["Projector Brand"] !== "none" && (
          <SpeakerDropdown
            label="Projector"
            options={(commonOptions["Projector"] || [])
              .filter((p) => p.BRAND === selections["Projector Brand"])
              .map((p) => ({ MODEL: p.MODEL }))}
            value={selections["Projector"] || ""}
            onChange={(e) => {
              const model = e.target.value;
              setSelections((prev) => ({ ...prev, Projector: model }));
              setProjectorSelection(model);
            }}
            price={formatPrice(
              getPriceByModel(
                commonOptions["Projector"] || [],
                "PRICE",
                selections["Projector Brand"],
                selections["Projector"] || ""
              )[0]?.PRICE || ""
            )}
          />
        )}

      {projectorSelection !== "default" && projectorSelection !== "none" && (
        <div className="m-5 p-4 border border-gray-400 rounded-xl shadow-md">
          <h1 className="font-semibold text-md">Custom Projector Price</h1>
          <input
            type="number"
            inputMode="numeric"
            placeholder="Enter Price"
            className="mt-2 w-full bg-amber-100 p-3 rounded-xl shadow border border-black"
            onChange={(e) =>
              setSelections((prev) => ({
                ...prev,
                "Projector Custom Price": e.target.value,
              }))
            }
          />
        </div>
      )}

      <SpeakerDropdown
  label="Signature Screen Ratio"
  options={commonOptions["Signature Screen Ratio"] || []}
  value={selectedRatio}
  onChange={(e) => {
    const ratio = e.target.value;
    setSelectedRatio(ratio);
    setSelections((prev) => ({
      ...prev,
      "Signature Screen Ratio": ratio,
      "Signature Screen": "",
    }));
  }}
/>


      {selectedRatio !== "none" && selectedRatio !== "default" && (
        <>
          <SpeakerDropdown
  label={`Screen Sizes for ${selectedRatio}`}
  options={(
    commonOptions["Signature Screen Sizes"]?.[selectedRatio] || []
  ).map((v) => ({ MODEL: v }))}
  value={selections["Signature Screen"] || ""}
  onChange={handleSelectionChange("Signature Screen")}
/>


          <div className="m-5 p-4 border border-gray-400 rounded-xl shadow-md">
            <h1 className="font-semibold text-md">Custom Screen Price</h1>
            <input
              type="number"
              inputMode="numeric"
              placeholder="Enter Price"
              className="mt-2 w-full bg-amber-100 p-3 rounded-xl shadow border border-black"
              onChange={(e) =>
                setSelections((prev) => ({
                  ...prev,
                  "Screen Custom Price": e.target.value,
                }))
              }
            />
          </div>

          <div className="m-5 p-4 border border-gray-400 rounded-xl shadow-md">
            <h1 className="font-semibold text-md">Custom Lens Price</h1>
            <input
              type="number"
              inputMode="numeric"
              placeholder="Enter Price"
              className="mt-2 w-full bg-amber-100 p-3 rounded-xl shadow border border-black"
              onChange={(e) =>
                setSelections((prev) => ({
                  ...prev,
                  "Lens Custom Price": e.target.value,
                }))
              }
            />
          </div>
        </>
      )}
    </div>
  );
}

export default SurroundSpeakers;
