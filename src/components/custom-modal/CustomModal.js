import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// import Card from "../components/Card";
function CustomModal({ open, onClose, data, onClickEdit }) {
  console.log(data, "daffffffffffta");
  let arrayKey = [];
  let arrayValue= []
  const [editData, seteditData] = useState({
    id:data._id,
    data:data.data
  });
//   const [editData, seteditData] = useState([])

  const navigate = useNavigate();


const updateForm = async () => {
  console.log("yeta");
try{

  const url = "/form/update";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({editData}),
  });
  const data = await res.json();
  console.log(data);
  if(res.status==200){
    window.location.reload()
  }

}
catch(err){
  console.log(err);
}
};
  
  const handleChange = (event) => {
    const userCopy = { ...editData };
    userCopy[event.target.name] = event.target.value;
    seteditData(userCopy);
  };


  useEffect(() => {
console.log(arrayKey,"keyy")
console.log(arrayValue,"value");
  },[arrayKey,arrayValue])
  return (
    <div>
   


     


        <Modal open={open} onClose={onClose} center>
        <h4>update Details </h4>
        <Form method="post">


        {data.data &&
        data.data.map((arr, ind) => {
    let key;
    let data; 
          for (let i in arr) {
              key = i;
             data = arr[i];

            console.log(`${i} : ${data}`);
            {/* arrayKey.push(`${i}`);
            arrayValue.push(` ${data}`); */}
           


          }
          return <input  name={`${key}`} value={`${data}`}  />
        })}



          <Row className="my-4">
         
            <Col>
              <Form.Control 
               onChange={handleChange}
                value={editData.id}
                name="id"
                placeholder="id"
              />
            </Col>
            <Col>
              <Form.Control 
               onChange={handleChange} value={editData.zip} name="zip" placeholder="zip" />
            </Col>
         
          </Row>

          <Row className="my-4">
            <Col>
              <Form.Control
                value={editData.state}
                name="state"
                placeholder="state"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Button onClick={updateForm}>Update</Button>
            </Col>
          </Row>
        </Form>
      </Modal>


    </div>
  );
}

export default CustomModal;
