import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { useContext } from "react";
import AppContext from "../../../context/AppContext";

function PriceSlider() {
  const {
    minMax,
    setMinMax,
    min,
    max,
    step,
    minMaxPriceRange,
  } = useContext(AppContext);

  const minDistance = step;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setMinMax([Math.min(newValue[0], minMax[1] - minDistance), minMax[1]]);
    } else {
      setMinMax([minMax[0], Math.max(newValue[1], minMax[0] + minDistance)]);
    }
  };

  return (
    <div className="3xl:p-3 2xl:p-3 xl:p-3 lg:p-3 md:p-3 xs:p-3 2xs:p-2 3xs:p-2 border-b border-slate-200">
      <h1 className="text-xs font-semibold uppercase mb-2 2xs:text-2xs 3xs:text-2xs">Price</h1>
      <Slider
        max={max}
        min={min}
        value={minMax}
        onChange={handleChange}
        disableSwap
        step={step}
        marks={minMaxPriceRange}
        sx={{
          "& .MuiSlider-thumb": {
            width: "12px",
            height: "12px",
            color: "white",
          },
        }}
      />
      <div className="flex justify-between">
        <span className="border-2 border-slate-300 w-24 h-6 xs:w-20 xs:h-6 2xs:w-12 2xs:h-6 3xs:w-12 3xs:h-6 rounded-sm px-2 text-sm xs:text-xs 2xs:text-2xs 3xs:text-2xs">
          {minMax[0] === 0 ? "Min" : `$${minMax[0]}`}
        </span>
        <span className="flex-1 text-center text-slate-400 3xs:text-xs">to</span>
        <span className="flex items-center border-2 border-solid border-slate-300 w-24 h-6 xs:w-20 xs:h-6  2xs:w-12 2xs:h-6 3xs:w-12 3xs:h-6 rounded-sm px-2 text-sm xs:text-xs 2xs:text-2xs 3xs:text-2xs">
          {`$${minMax[1]}`}
        </span>
      </div>
    </div>
  );
}

export default PriceSlider;
