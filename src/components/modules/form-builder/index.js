import React, { useReducer, useState, useMemo } from "react";
import FormBuilderMainView from "./create/form-builder";
import ModalComponent from "./create/modal-component";
import FormDataView from "./view/form-data-view";

const initialFormControlsState = [];
let formName = "";

export const actionTypes = {
  ADD_CONTROL: "ADD_CONTROL",
  REMOVE_CONTROL: "REMOVE_CONTROL",
};

function formReducer(state, {type, payload}) {
  if (type === actionTypes.ADD_CONTROL) {
    return [...state, payload];
  } else if(type === actionTypes.REMOVE_CONTROL) {
    return state.filter(c=> c.id !== payload);
  }
  return state;
}

export default function FormBuilder() {

  const [formData, dispatch] = useReducer(
    formReducer,
    initialFormControlsState
  );
  
  const promptFormName = function() {
    formName = (formName)? formName: prompt("Enter form name") 
    return formName;
  };
  
  // const [formNameState, setFormNameState] = useState(promptFormName());
  const [formNameState, setFormNameState] = useState();


  return (
    <div className="form-builder-main-view__parent">
    <h1> Create New Form </h1>
      <FormBuilderMainView
        name={formNameState}
        formData={formData}
        // changeName={()=> setFormNameState(prompt("Enter form name"))}
        changeName={()=> setFormNameState(prompt("Enter form name"))}
 
        dispatch={dispatch}
      />
      {/* <FormDataView /> */}
      <ModalComponent dispatch={dispatch} formData={formData} />
      
    </div>
  );
}
