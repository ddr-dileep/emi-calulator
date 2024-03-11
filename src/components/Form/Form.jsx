import React, { memo } from "react";
import Input from "../input/Input";
import InputSlider from "../slider/Slider";

// styling
import "./Form.scss";

const Form = ({ formFields, formValue, setFormValue }) => {
  const inputChangeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="app_form">
      {formFields.map((field) => {
        return (
          <div key={field.id} className="app_form-home-loan-amount">
            <div className="app_form-home-loan-amount-upper">
              <span className="app_form-home-loan-amount-upper-title">
                {field.title}
              </span>
              <span>
                <Input
                  value={formValue[field.name]}
                  {...field}
                  onChange={inputChangeHandler}
                />
              </span>
            </div>
            <div className="app_form-home-loan-amount-below">
              <InputSlider
                setSliderValue={inputChangeHandler}
                {...field}
                sliderValue={formValue[field.name]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Form);
