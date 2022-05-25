import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CustomModal({ open, onClose, data, onClickEdit }) {
  const [userData, setuserData] = useState([]);

  let arrayKey = [];
  let arrayValue = [];
  let arrayData = [];
  const [editData, seteditData] = useState({
    id: data._id,
    data: data.data
  });

  const navigate = useNavigate();
 
  const updateForm = async () => {
    console.log("yeta");
    try {
      const url = "/form/update";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({ editData })
      });
      const data = await res.json();
      console.log(data);
      if (res.status == 200) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = event => {
    const userCopy = { ...editData };
    userCopy[event.target.name] = event.target.value;
    seteditData(userCopy);
  };


  return (
    <div>
      {data.data &&
        data.data.map((arr, ind) => {
          for (let i in arr) {
            let data = arr[i];

            console.log(`${i} : ${data}`);
            arrayData.push(`${i} : ${data}`);
            arrayKey.push(`${i}`);
            arrayValue.push(` ${data}`);
          }
        })}

      <Modal open={open} onClose={onClose} center>
        <h4>update Details </h4>
        <Form method="post">
          {/* {displayMapData} */}
{/* <h1> {arrayData.title} ddd </h1> */}
          <div
            style={{
              display: "flex",
              flexdirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {arrayData.map((val, ind) => {
              return<div  key={ind}> <label> {arrayKey[ind]} </label> <input onChange={handleChange}  name={arrayKey[ind]} value={arrayValue[ind]} /> <br/> </div> 
            })}
          </div>
          <Button style={{ width: "48%", marginTop: "10px" , display:"flex",justifyContent: "center"}} type="submit">
            Submit form
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default CustomModal;
