import React, {useState} from "react";

function FormDataView(props) {
  const [formArray, setFormArray] = useState(sessionStorage["userForms"] || []);

  return (
    <div className="panel panel-primary view-panel">
      <div className="panel-header">Form Data View</div>
      <div
        className={`panel-body ${
          !(props.formArray && props.formArray.length) ? "flex-center" : ""
        }`}
      >
        {formArray.length ? <h2>Form Array</h2> : <h5>No Form Available</h5>}
      </div>
    </div>
  );
}

export default FormDataView;
