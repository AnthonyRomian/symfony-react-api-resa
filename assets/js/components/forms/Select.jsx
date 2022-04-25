
import React from "react";

const Select = ({ name, value, error = "", label, onChange, children }) => {
  return (
    <div className="form-group col-6 col-sm-6">
      <label htmlFor={name}>{label}</label>
      <select
        onChange={onChange}
        name={name}
        id={name}
        value={value}
        className={"form-control" + (error && " is-invalid")}
      >
        {children}
      </select>
      <p className="invalid-feedback">{error}</p>
    </div>
  );
};

export default Select;