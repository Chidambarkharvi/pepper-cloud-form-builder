import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function View({ open, onClose, data, onClickEdit }) {

  let arrayKey = [];
  let arrayValue = [];
  let arrayData = [];

  console.log(data.data, "vie data");

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
        <h4>View Details </h4>
        <Form method="post">
          <div style={{ width: "300px", padding: "20px" }}>
            {arrayData &&
              arrayData.map(val => {
                return <p style={{ fontSize: "16px" }}> {val} </p>;
              })}
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default View;
