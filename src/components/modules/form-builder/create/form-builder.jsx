import React, { useState, useEffect } from "react";
import NoFormView from "./no-form-view";
import FormControl from "./form-control";
import { useNavigate } from "react-router-dom";

const FormBuilderMainView = function({
  formData,
  name,
  changeName,
  dispatch,
  onSubmit
}) {
  const hasFormData = !!(formData && formData.length);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const checkValidity = () => {
    let divEle = document.getElementById("forms-field").children;
    console.log(divEle, "d");
    //
    for (let i = 0; i < divEle.length; i++) {
      setDisabled(!divEle[i].checkValidity());
    }
  };

  const submitForm = function(e) {
    let dataObj = { title: name };
    let divEle = document
      .getElementById("forms-field")
      .getElementsByTagName("input");
    //
    console.log(divEle, "divEle");
    for (let i = 0; i < divEle.length; i++) {
      let inputVal = divEle[i].value;
      let inputName = divEle[i].name;
      dataObj[inputName] = inputVal;
    }
    console.log(dataObj, "inputObj");

    postData(dataObj);

    navigate("/home");
  };

  const postData = async dataObj => {
    // e.preventDefault();
    console.log("yeta");

    const url = "/create";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({ dataObj })
    });
    const data = await res.json();
    console.log(data);
    console.log(res.status);
    if (res.status == 200) {
      // navigate("/home");
    } else {
      // navigate("/");
    }
  };

  return (
    <div className="panel panel-primary form-panel">
      <div className="panel-header">
        <span className="form-title">
          {name || "Untitled Form"}
          &nbsp;
          <i
            className="fa fa-pencil"
            title="click to edit form name"
            onClick={() => changeName()}
          />
        </span>
        <a
          className="add-control-link pull-right clickable"
          data-toggle="modal"
          title="click to add new form field"
          data-target="#fc_modal"
        >
          <i className="fa fa-plus" />
          Add Control
        </a>
      </div>
      <div
        className={`panel-body ${!hasFormData && "flex-center"}`}
        id="forms-field"
      >
        {hasFormData ? (
          <form
            name={name}
            onChange={e => checkValidity(e)}
            onSubmit={e => e.preventDefault()}
          >
            {formData.map((c, i) => (
              <FormControl
                {...c}
                key={`control-${i}`}
                validator={checkValidity}
                dispatch={dispatch}
              />
            ))}
          </form>
        ) : (
          <NoFormView />
        )}
      </div>
      <div className="panel-footer text-right">
        <button
          onClick={() => submitForm()}
          className="btn btn-success"
          title="click to save the form data"
          disabled={disabled}
          type="button"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default FormBuilderMainView;
