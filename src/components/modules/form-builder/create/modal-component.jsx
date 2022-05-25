import React, { useState, useReducer, useRef } from "react";
import { actionTypes } from "../index";

const initialOptState = [];

const optionActions = {
  ADD_OPT: "ADD_OPTION",
  UPDATE_OPT: "UPDATE_OPTION",
  REM_OPT: "REMOVE_OPTION",
  CLEAR_OPTS: "CLEAR_OPTIONS",
};

function optionsReducer(state, { type, payload }) {
  if (type === optionActions.ADD_OPT) {
    return [...state, { id: payload }];
  } else if (type === optionActions.REM_OPT) {
    return state.filter((opt) => opt.id != payload);
  } else if (type === optionActions.UPDATE_OPT) {
    return state.map((opt) => (opt.id === payload.id ? payload : opt));
  } else {
    return [];
  }
}

function renderOptions(meta, options, dispatch) {
  if (meta.type === "SELECT") {
    return (
      <div>
        <p className="text-center">
          Add options
          <button
            type="button"
            className="btn btn-success ml-1"
            onClick={() => {
              dispatch({
                type: optionActions.ADD_OPT,
                payload: options.length + 1,
              });
            }}
          >
            Add
          </button>
        </p>
        {options.map((opt, i) => (
          <p className="text-center" key={`opt-${i}`}>
            <input
              type="text"
              placeholder="Option name"
              className="form-control inline"
              onBlur={(e) =>
                dispatch({
                  type: optionActions.UPDATE_OPT,
                  payload: {
                    id: opt.id,
                    label: e.target.value,
                  },
                })
              }
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() =>
                dispatch({ type: optionActions.REM_OPT, payload: opt.id })
              }
            >
              Remove
            </button>
          </p>
        ))}
      </div>
    );
  }
  return null;
}

function ModalComponent(props = {}) {
  const [meta, setMeta] = useState({
    name: "",
    type: "",
    placeholder: "",
  });

  const selectControl = useRef(null);

  const [options, dispatch] = useReducer(optionsReducer, initialOptState);

  const handleSubmit = function() {
    props.dispatch({ type: actionTypes.ADD_CONTROL, payload: meta });
    setMeta({
      id: props.formData.length + 1,
      name: "",
      type: "",
      placeholder: "",
      // name:meta.type, 
      // value:meta.name
    });
    selectControl.current.value = "";
  };

  const handleSelectChange = function(e) {
    setMeta({ ...meta, type: e.target.value });
    if (e.type !== "SELECt" && options.length) {
      dispatch({ type: optionActions.CLEAR_OPTS });
    }
  };

  const handleSubmitDisable = function() {
    return (
      !meta.type ||
      !meta.name ||
      !meta.placeholder ||
      (meta.type === "SELECT" && !options.length) ||
      (meta.type === "SELECT" &&
        options.find((o) => !o.label || (o.label && !o.label.trim())))
    );
  };

  return (
    <div className="modal fade" id="fc_modal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <h4 className="modal-title">Form Control Details</h4>
          </div>
          <div className="modal-body">
            <div className="form-create-container">
              <p className="text-info text-small text-center form-info-label">
                Fields marked with * are mandatory.
              </p>
              <p className="form-group form-inline text-center flex-align-center row">
                <label className="col-sm-5 col-sm-offset-1">
                  Form control name *
                </label>
                <input
                  type="text"
                  onChange={(e) => setMeta({ ...meta, name: e.target.value })}
                  className="form-control col-sm-5"
                  placeholder="Enter form control name"
                  value={meta.name}
                />
              </p>

              <p className="form-group form-inline text-center row">
                <label className="col-sm-5 col-sm-offset-1">
                  Form control type *
                </label>
                <select
                  className="form-control col-sm-5"
                  defaultValue=""
                  ref={selectControl}
                  onChange={(e) => handleSelectChange(e)}
                >
                  <option value="" disabled hidden>
                    Select input type
                  </option>
                  <option value="TEXT">Text</option>
                  <option value="SELECT">Select</option>
                  <option value="PASSWORD">Password</option>
                  <option value="DATE">Date</option>
                  <option value="EMAIL">Email</option>
                  <option value="NUMBER">Number</option>
                </select>
              </p>
              {renderOptions(meta, options, dispatch)}
              <p className="form-group form-inline text-center flex-align-center row">
                <label className="col-sm-5 col-sm-offset-1 text-left">
                  Form Control Placeholder *
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setMeta({ ...meta, placeholder: e.target.value })
                  }
                  className="form-control col-sm-5"
                  placeholder="Enter form control placeholder"
                  value={meta.placeholder}
                />
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-success"
              type="button"
              onClick={() => handleSubmit()}
              disabled={handleSubmitDisable()}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
