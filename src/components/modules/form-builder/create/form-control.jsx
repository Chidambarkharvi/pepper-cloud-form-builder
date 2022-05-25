import React, { useState, useRef } from "react";
import { actionTypes } from "../";

function getControl(type, name) {
  if (type === "TEXT") {
    return (
      <input
        type="text"
        name={name}
        className="form-control col-sm-6"
        required
      />
    );
  } else if (type === "SELECT") {
    return (
      <select
        className="form-control col-sm-6"
        name={name}
        defaultValue=""
        required
      >
        <option>1</option>
      </select>
    );
  } else if (type === "NUMBER") {
    return (
      <input
        type="number"
        name={name}
        className="form-control col-sm-6"
        required
      />
    );
  } else if (type === "PASSWORD") {
    return (
      <input
        type="password"
        name={name}
        className="form-control col-sm-6"
        required
      />
    );
  } else if (type === "EMAIL") {
    return (
      <input
        type="email"
        name={name}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        className="form-control col-sm-6"
        required
      />
    );
  } else if (type === "DATE") {
    return (
      <input
        type="date"
        name={name}
        className="form-control col-sm-6"
        required
      />
    );
  }
}

function FormControl({ type, name, validator, dispatch, id,placeholder }) {
  const controlRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleBlur = function(e) {
    let validationMsg = "";
    if (e && e.target.validity.valueMissing) {
      validationMsg = `${name} is required`;
    } else if (e.target.validity.patternMismatch) {
      validationMsg = `Invalid input.`;
    } else {
      validationMsg = "";
    }
    setMessage(validationMsg);
    e.target.touched = true;
    if (validationMsg) {
      e.target.classList.add("red-border");
    } else {
      e.target.classList.remove("red-border");
    }
  };

  const Control = React.cloneElement(getControl(type, name), {
    onBlur: (e) => handleBlur(e),
    onKeyUp: (e) => e.target.touched && handleBlur(e),
    onChange: (e) => validator(),
    ref: controlRef,
    autoComplete: "off",
    placeholder
  });

  return (
    <>
      <div
        className={`form-group form-inline row ${message ? "has-error" : ""}`}
      >
        <label className={`col-sm-4 text-center mx-0`}>{name} *</label>
        {Control}
        <button
          type="button"
          title="click to delete this control"
          className="btn btn-danger icon-btn btn-xs"
          onClick={()=> dispatch({type: actionTypes.REMOVE_CONTROL, payload: id})}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
      {message ? (
        <p className="row">
          <span className="col-sm-6 col-sm-offset-5 text-center text-danger">
            {message}
          </span>
        </p>
      ) : null}
    </>
  );
}

export default FormControl;
