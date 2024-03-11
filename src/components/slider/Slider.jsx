import * as React from "react";
import Slider from "@mui/material/Slider";

const InputSlider = ({ name, sliderValue, setSliderValue, marks }) => {
  return (
    <Slider
      name={name}
      onChange={setSliderValue}
      aria-label="Custom marks"
      defaultValue={10}
      value={sliderValue}
      step={1}
      color="secondary"
      valueLabelDisplay="auto"
      marks={marks}
      min={marks[0].value}
      max={marks[marks.length - 1].value}
    />
  );
};

export default React.memo(InputSlider);
