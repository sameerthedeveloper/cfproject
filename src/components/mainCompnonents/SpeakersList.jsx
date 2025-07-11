import React, { useEffect, useState } from "react";
import Speakers from "../miniCompnonents/Speakers";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import SurroundDropDown from "../miniCompnonents/SurroundDropDown";
import Amplifier from "../miniCompnonents/Amplifier";
import QuotationPDF from "./pdfQuotation";
import Projector from "../miniCompnonents/Projector";
import FinalDatatable from "./FinalDataTable";
import ScreenRatio from "../miniCompnonents/ScreenRatio"; // expecting default export
import ScreenSize from "../miniCompnonents/ScreenSize";

function SpeakersList() {
  const [activeTab, setActiveTab] = useState("home");
  const tabs = [
    { tab: "home", icon: "fa-house", label: "Main" },
    { tab: "invoice", icon: "fa-file-invoice-dollar", label: "Invoice" },
  ];

  const [data, setData] = useState([]);

  const [priceLR, setPriceLR] = useState();
  const [priceCenter, setPriceCenter] = useState();
  const [priceSub, setPriceSub] = useState();

  const [surroundType, setSurroundType] = useState("");

  const [selectedBrand, setSelectedBrand] = useState("");
  const [Brands, setBrands] = useState([]);

  const [LR, setLR] = useState([]);
  const [selectedLR, setSelectedLR] = useState("");

  const [Center, setCenter] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState("");

  const [selectedSubwoofer, setSelectedSubwoofer] = useState("");

  const [surroundCountvalue, setSurroundCountvalue] = useState();
  const [surr, setSurr] = useState([]);
  const [selectedSurr, setSelectedSurr] = useState("");
  const [priceSurr, setPriceSurr] = useState();

  const [atmosCountvalue, setAtmosCountvalue] = useState();
  const [atmos, setAtmos] = useState([]);
  const [selectedAtmos, setSelectedAtmos] = useState("");
  const [priceAtmos, setPriceAtmos] = useState();

  const [Amplifier, setAmplifier] = useState([]);
  const [selectedAmplifier, setSelectedAmplifier] = useState("");
  const [priceAmp, setPriceAmp] = useState();

  const [Projectors, setProjectors] = useState([]);
  const [projectorBrands, setProjectorBrands] = useState([]);
  const [selectedProjector, setSelectedProjector] = useState("");
  const [selectedProjectorBrand, setSelectedProjectorBrand] = useState("");
  const [priceProj, setPriceProj] = useState();

  // const [screen, setscreen] = useState([]);
  // const [ratioList, setRatioList] = useState([]);
  // const [screenRatio, setScreenRatio] = useState("");
  // const [selectedScreen, setSelectedScreen] = useState("");
  // const [priceScreen, setPriceScreen] = useState();
  // const [ScreenSizeList, setScreenSizeList] = useState([]);

  const [ScreenList, setScreenList] = useState([]);
  const [screenRatioValue, setScreenRatioValue] = useState("");
  const [SelectedScreenSize, setSelectedScreenSize] = useState("");
  const [ScreenPrice, setScreenPrice] = useState();
  const [lens, setlens] = useState();

  const finalData = {
    "Surround Version": surroundType,
    Brand: selectedBrand,
    "Projector Brand": selectedProjectorBrand,
    "Left & Right": selectedLR,
    "LR Price": priceLR,
    Center: selectedCenter,
    "Center Price": priceCenter,
    "Surround Count": surroundCountvalue,
    Surround: selectedSurr,
    "Surround Price": priceSurr,
    "Atmos Count": atmosCountvalue,
    Atmos: selectedAtmos,
    "Atmos Price": priceAtmos,
    Subwoofer: selectedSubwoofer,
    "Sub Price": priceSub,
    Amplifier: selectedAmplifier,
    "Amp Price": priceAmp,

    Projector: selectedProjector,
    "Projector Price": priceProj,
  };

  const CONFIG = {
    5.1: {
      "Left & Right": "LEFT RIGHT",
      "Center Speaker": "CENTER",
      "Surround ": "SURROUND",
      Subwoofer: "SUB",
    },
    7.1: {
      "Left & Right": "LEFT RIGHT",
      "Center Speaker": "CENTER",
      "Surround ": "SURROUND",

      Subwoofer: "SUB",
    },
    7.2: {
      "Left & Right": "LEFT RIGHT",
      "Center Speaker": "CENTER",
      "Surround ": "SURROUND",

      Atmos: "ATMOS",
      Subwoofer: "SUB",
    },
    9.1: {
      "Left & Right": "LEFT RIGHT",
      "Center Speaker": "CENTER",
      "Surround ": "SURROUND",

      Atmos: "ATMOS",
      Subwoofer: "SUB",
    },
    9.2: {
      "Left & Right": "LEFT RIGHT",
      "Center Speaker": "CENTER",
      "Surround ": "SURROUND",

      Atmos: "ATMOS",
      Subwoofer: "SUB",
    },
    11.1: {
      "Left & Right": "LEFT RIGHT",
      "Center Speaker": "CENTER",
      "Surround ": "SURROUND",

      Atmos: "ATMOS",
      Subwoofer: "SUB",
    },
    11.2: {
      "Left & Right": "LEFT RIGHT",
      "Center Speaker": "CENTER",
      "Surround ": "SURROUND",

      Atmos: "ATMOS",
      Subwoofer: "SUB",
    },
    13.1: {
      "Left & Right": "LEFT RIGHT",
      "Center Speaker": "CENTER",
      "Surround ": "SURROUND",

      Atmos: "ATMOS",
      Subwoofer: "SUB",
    },
    13.2: {
      "Left & Right": "LEFT RIGHT",
      "Center Speaker": "CENTER",
      "Surround ": "SURROUND",

      Atmos: "ATMOS",
      Subwoofer: "SUB",
    },
  };

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

  // Fetch Firestore data based on selected surround type
  useEffect(() => {
    if (!surroundType) return;

    setSelectedBrand("default");
    setSelectedLR("default");
    setLR([]);
    setData([]);
    setBrands([]);
    setSurroundCountvalue();
    setAtmosCountvalue();

    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, surroundType));
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);

        const extractedBrands = getUniqueByKey(items, "BRAND");
        setBrands(extractedBrands);
      } catch (err) {
        console.error("Error fetching Firestore data:", err);
      }
    };

    fetchData();
  }, [surroundType]);

  // Get unique items by a key
  const getUniqueByKey = (arr, key) => {
    const seen = new Set();
    return arr.filter((item) => {
      const val = item[key];
      return val && !seen.has(val) && seen.add(val);
    });
  };

  // Get items of a given type (like "LEFT RIGHT") filtered by brand
  const getModelByBrandAndType = (arr, key, brand, type) => {
    const seen = new Set();
    return arr.filter((item) => {
      const value = item[key];
      return (
        item.BRAND === brand &&
        item.TYPE === type &&
        value &&
        !seen.has(value) &&
        seen.add(value)
      );
    });
  };

 const getScreenSizesByRatio = (arr, key, ratio) => {
  if (!Array.isArray(arr) || !ratio) return [];
  return arr.filter((item) => item[key]?.toString() === ratio.toString());
};





  // Update LR models when brand changes
  useEffect(() => {
    if (!selectedBrand) {
      setLR([]);
      setSelectedLR("");
      return;
    }

    const leftRightModels = getModelByBrandAndType(
      data,
      "MODEL",
      selectedBrand,
      "LEFT RIGHT"
    );
    setLR(leftRightModels);
    setSelectedLR("");
  }, [selectedBrand, data]);

  useEffect(() => {
    if (!selectedBrand) {
      setCenter([]);
      setSelectedCenter("");
      return;
    }

    const CenterModels = getModelByBrandAndType(
      data,
      "MODEL",
      selectedBrand,
      "CENTER"
    );
    setCenter(CenterModels);
    setSelectedCenter("");
  }, [selectedBrand, data]);

  // Update Surround models when brand changes
  useEffect(() => {
    if (!selectedBrand) {
      setSurr([]);
      setSelectedSurr("");
      return;
    }

    const SurrModels = getModelByBrandAndType(
      data,
      "MODEL",
      selectedBrand,
      "SURROUND"
    );
    setSurr(SurrModels);
    setSelectedSurr("");
  }, [selectedBrand, data]);

  // Update Atmos models when brand changes
  useEffect(() => {
    if (!selectedBrand) {
      setAtmos([]);
      setSelectedAtmos("");
      return;
    }

    const AtmosModels = getModelByBrandAndType(
      data,
      "MODEL",
      selectedBrand,
      "ATMOS"
    );
    setAtmos(AtmosModels);
    setSelectedAtmos("");
  }, [selectedBrand, data]);

  useEffect(() => {
    const fetchAmpData = async () => {
      try {
        const snap = await getDocs(collection(db, "Amplifiers"));
        const items = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setAmplifier(items);
      } catch (e) {
        console.error("Error: ", e);
      }
    };

    fetchAmpData();
  }, []);

  useEffect(() => {
    const fetchProjData = async () => {
      try {
        const snap = await getDocs(collection(db, "Projectors"));
        const items = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProjectorBrands(getUniqueByKey(items, "BRAND"));
        setProjectors(items);
      } catch (e) {
        console.error("Error: ", e);
      }
    };

    fetchProjData();
  }, []);

  const formatPrice = (price) => {
    if (price === null || price === undefined) return "";
    return new Intl.NumberFormat("en-IN").format(price);
  };

  const findPriceByModel = (arr, key = "PRICE", brand, model) => {
    for (const item of arr) {
      if (item[key] && item.BRAND === brand && item.MODEL === model) {
        return item[key]; // Should return PRICE number
      }
    }
    return 0; // Return 0 if no match
  };

  useEffect(() => {
    const raw = findPriceByModel(data, "PRICE", selectedBrand, selectedCenter);
    setPriceCenter(raw);
  }, [selectedCenter, selectedBrand, data]);

  useEffect(() => {
    const raw = findPriceByModel(
      data,
      "PRICE",
      selectedBrand,
      selectedSubwoofer
    );
    setPriceSub(raw);
  }, [selectedSubwoofer, selectedBrand, data]);

  useEffect(() => {
    const raw = findPriceByModel(data, "PRICE", selectedBrand, selectedSurr);
    setPriceSurr(raw);
  }, [selectedSurr, selectedBrand, data]);

  useEffect(() => {
    const raw = findPriceByModel(data, "PRICE", selectedBrand, selectedAtmos);
    setPriceAtmos(raw);
  }, [selectedAtmos, selectedBrand, data]);

  useEffect(() => {
    const raw = findPriceByModel(
      Amplifier,
      "PRICE",
      selectedBrand,
      selectedAmplifier
    );
    setPriceAmp(raw);
  }, [selectedAmplifier, selectedBrand, Amplifier]);

  useEffect(() => {
    const raw = findPriceByModel(
      Projectors,
      "PRICE",
      selectedProjectorBrand,
      selectedProjector
    );
    setPriceProj(raw);
  }, [selectedProjector, selectedProjectorBrand, Projectors]);

  // fetch only once on mount
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "SignatureScreenSizes")
        );
        const items = querySnapshot.docs.map(doc=>({id:doc.id,...doc.data()}))
        setScreenList(items)
      } catch (error) {
        console.error("Error fetching SignatureScreenSizes:", error);
      }
    };

    fetchEntries();
  }, [screenRatioValue]);

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="p-5 border-b border-gray-200 bg-white shadow sticky top-0 z-10">
        <h1 className="font-semibold text-3xl">Cinema Focus</h1>
      </div>

      {activeTab === "home" && (
        <>
          <div className="home overflow-scroll scroll-hide">
            {/* Surround Type Dropdown */}
            <Speakers
              label={"Surround Version"}
              List={surroundVersions}
              selected={surroundType}
              setSelected={setSurroundType}
              valueKey="value"
              labelKey="name"
            />

            {/* Brand Dropdown */}
            <Speakers
              label={"Brand"}
              List={Brands}
              selected={selectedBrand}
              setSelected={setSelectedBrand}
              valueKey="BRAND"
              labelKey="BRAND"
            />

            {surroundType &&
              CONFIG[surroundType] &&
              Object.entries(CONFIG[surroundType]).map(
                ([label, firestoreType]) => {
                  // const selectedModel = selections[label] || "";

                  const filteredData = data.filter(
                    (item) =>
                      item.BRAND === selectedBrand &&
                      item.TYPE === firestoreType
                  );
                  const valueKey = "MODEL";
                  const labelKey = "MODEL";

                  if (
                    label.toLowerCase().includes("surround") ||
                    label.toLowerCase().includes("atmos")
                  ) {
                    // use SurroundDropDown for Surround / Atmos
                    return (
                      <SurroundDropDown
                        key={label}
                        label={label}
                        count={
                          label.toLowerCase().includes("atmos")
                            ? atmosCountvalue
                            : surroundCountvalue
                        }
                        setCount={
                          label.toLowerCase().includes("atmos")
                            ? setAtmosCountvalue
                            : setSurroundCountvalue
                        }
                        List={filteredData}
                        valueKey={valueKey}
                        labelKey={labelKey}
                        selected={
                          label.toLowerCase().includes("atmos")
                            ? selectedAtmos
                            : selectedSurr
                        }
                        setSelected={
                          label.toLowerCase().includes("atmos")
                            ? setSelectedAtmos
                            : setSelectedSurr
                        }
                      />
                    );
                  } else {
                    // use Speakers for Left, Center, Subwoofer
                    const selectedStateMap = {
                      "Left & Right": [selectedLR, setSelectedLR],
                      "Center Speaker": [selectedCenter, setSelectedCenter],
                      Subwoofer: [selectedSubwoofer, setSelectedSubwoofer],
                      // Add subwoofer or other roles if needed
                    };

                    const selectedPriceStateMap = {
                      "Left & Right": [priceLR, setPriceLR],
                      "Center Speaker": [priceCenter, setPriceCenter],
                      Subwoofer: [priceSub, setPriceSub],
                      // Add subwoofer or other roles if needed
                    };

                    const [selected, setSelected] = selectedStateMap[label] || [
                      "",
                      () => {},
                    ];

                    const [selectedPrice, setSelectedPrice] =
                      selectedPriceStateMap[label] || ["", () => {}];

                    const rawPrice = findPriceByModel(
                      filteredData,
                      "PRICE",
                      selectedBrand,
                      selected
                    );
                    const formattedPrice = formatPrice(rawPrice);

                    return (
                      <Speakers
                        key={label}
                        label={`${label}`}
                        List={filteredData}
                        selected={selected}
                        setSelected={setSelected}
                        valueKey={valueKey}
                        labelKey={labelKey}
                        price={formattedPrice}
                        rawprice={rawPrice}
                        setPrice={setSelectedPrice}
                      />
                    );
                  }
                }
              )}

            <Speakers
              label={"Amplifiers"}
              List={Amplifier}
              selected={selectedAmplifier}
              setSelected={setSelectedAmplifier}
              valueKey="MODEL"
              labelKey="MODEL"
              price={formatPrice(priceAmp)}
              setPrice={setPriceAmp}
              rawprice={priceAmp}
            />

            <Projector
              label="Projector"
              selected={selectedProjector}
              setSelected={setSelectedProjector}
              List={Projectors}
              BrandList={projectorBrands}
              valueKey="BRAND"
              labelKey="BRAND"
              setSelectedBrand={setSelectedProjectorBrand}
              selectedBrand={selectedProjectorBrand}
              cmlk="MODEL"
              cmvk="MODEL"
            />

            <ScreenRatio
  label="Screen Ratio"
  List={ScreenList}
  screenRatioValue={screenRatioValue}
  setScreenRatio={setScreenRatioValue}
  ModelList={ScreenList}
  SelectedModel={SelectedScreenSize}
  setselectedModel={setSelectedScreenSize}
  price={ScreenPrice}
  setPrice={setScreenPrice}
  setLens={setlens}
  labelkey="ratio"
  valuekey="ratio"
  LabelKey="size"
  ValueKey="size"
  GetUnique={getUniqueByKey}
  GetSize={getScreenSizesByRatio}
/>


            <div className="mb-20"></div>
          </div>
        </>
      )}

      {activeTab === "invoice" && (
        <div className="p-4">
          {/* <QuotationPDF /> */}
          <FinalDatatable data={finalData} />
        </div>
      )}
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

export default SpeakersList;
