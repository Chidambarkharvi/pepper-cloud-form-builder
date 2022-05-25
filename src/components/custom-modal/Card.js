import React, { useEffect, useState } from "react";
import CustomModal from './CustomModal';

function Card({ onClick, data, onDelete,onClickView }) {
  const [title, settitle] = useState({})

  const [arrDataPass, setarrDataPass] = useState()

  let arrayData = [];
  let arrayKey = [];
  let arrayValue= []



useEffect(() => {
  data.data.map(val => {
    return settitle(val.title)
     {/* return <p style={{fontSize:"25px", fontWeight:"bold"}}>Title : {val.title} </p>; */}
   })

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
const displayData = arrayData.map(val => {
    return val
  })

  setarrDataPass(displayData)
  
},[])
console.log(arrDataPass,"arrayaaaaaafdataa")


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
     

 
<p style={{fontSize:"15px"}} > Title : <input style={{outline:"none",borderBottomColor:" black",borderBottomWidth:"5px"}} onChange={(e)=>{
settitle(e.target.value)
}} value={title}    /></p>
<h1>{data.data.title}</h1>
      <button
        onClick={() => onClickView(data)}
        style={{
          padding: "3px 15px 3px 15px",
          borderRadius: "10px",
          backgroundColor: "green",
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
          View
        </p>
      </button>

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
        onClick={() => onDelete(data,arrayData)}
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


     
{/* <CustomModal  data={data}  /> */}

    </div>
  );
}

export default Card;
