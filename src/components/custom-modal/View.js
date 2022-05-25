import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function View({ open, onClose, data, onClickEdit }) {

    const [arrDataPass, setarrDataPass] = useState([])

    let arrayData = [];
 
    console.log(data.data,"vie data");

    useEffect(() => {
   

        {data.data &&
          data.data.map((arr, ind) => {

            for (let i in arr) {
              let data = arr[i];

              console.log(`${i} : ${data}`,"hello 1");
              arrayData.push(`${i} : ${data}`)
              console.log(arrayData,"inside aarr")

              setarrDataPass(arrayData)
              console.log(arrDataPass, "arr data")
            

            }
          })}
      const displayData = arrayData.map(val => {
          return val
        })
console.log(displayData,"dsadaf")
        setarrDataPass(displayData)

      },[])
    //   console.log(arrDataPass,"arrayaaaaaafdataa")

  return (
    <div>

    <Modal open={open} onClose={onClose} center>
        <h4>View Details </h4>
        <Form method="post">
<div style={{width: "300px", padding: "20px"}}>
{arrDataPass && arrDataPass.map((val)=>{
return <p style={{fontSize: "16px"}}> {val}   </p>
})}

</div>

        </Form>
      </Modal>


      

    </div>
  )
}

export default View