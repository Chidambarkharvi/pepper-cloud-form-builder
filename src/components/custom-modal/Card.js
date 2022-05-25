import React, { useEffect, useState } from "react";

function Card({ onClick, data, onDelete }) {

  let arrayData = [];
  let arrayKey = [];
  let arrayValue= []


  return (
    <div
      style={{
        minWidth: 300,
        minHeight: 300,
        maxWidth: 350,
        maxHeight: 350,
        padding: "20px",
        boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
        margin: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
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
      {arrayData.map(val => {
        return <p> {val} </p>;
      })}

      <button
        onClick={() => onClick(data)}
        style={{
          padding: "3px 15px 3px 15px",
          borderRadius: "10px",
          backgroundColor: "dodgerblue",
          marginBottom: 6
        }}
      >
        <p
          style={{
            padding: 0,
            margin: 0,
            fontWeight: "bold",
            fontSize: 12,
            color: "white"
          }}
        >
          Edit
        </p>
      </button>

      <button
        onClick={() => onDelete(data)}
        style={{
          padding: "3px 15px 3px 15px",
          borderRadius: "10px",
          backgroundColor: "red",
          marginBottom: 6
        }}
      >
        <p
          style={{
            padding: 0,
            margin: 0,
            fontWeight: "bold",
            fontSize: 12,
            color: "white"
          }}
        >
          Delete
        </p>
      </button>
    </div>
  );
}

export default Card;
