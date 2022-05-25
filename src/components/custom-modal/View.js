import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function View({ open, onClose, data, onClickEdit }) {

    const [arrDataPass, setarrDataPass] = useState()

    let arrayData = [];
    let arrayKey = [];
    let arrayValue= []
    console.log(data.data,"vie data");

    useEffect(() => {

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
console.log(displayData,"dsadaf")
        setarrDataPass(displayData)

      },[])
      console.log(arrDataPass,"arrayaaaaaafdataa")

  return (
    <div>

    <Modal open={open} onClose={onClose} center>
        <h4>View Details </h4>
        <Form method="post">
<div>


</div>

        </Form>
      </Modal>

    </div>
  )
}

export default View

// import React, { useEffect, useState } from "react";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
// import { Button, Col, Form, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// // import Card from "../components/Card";
// function View({ open, onClose, data, onClickEdit }) {
//   console.log(data, "daffffffffffta");
//   const [userData, setuserData] = useState([]);
//   console.log(userData, "haj");

//   let arrayKey = [];
//   let arrayValue = [];
//   let arrayData = [];
//   const [editData, seteditData] = useState({
//     id: data._id,
//     data: data.data
//   });
//   //   const [editData, seteditData] = useState([])

//   const navigate = useNavigate();
//   // const callUserPage = async () => {
//   //   try {
//   //     const url = "/user/details";
//   //     const res = await fetch(url, {
//   //       method: "GET",
//   //       headers: {
//   //         "Content-Type": "application/json"
//   //       }
//   //     });

//   //     const data = await res.json();
//   //     console.log(data, "daata");

//   //     setuserData(data);

//   //     if (!res.status === 200) {
//   //       const error = new Error(res.error);
//   //       throw error;
//   //     }
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   const updateForm = async () => {
//     console.log("yeta");
//     try {
//       const url = "/form/update";
//       const res = await fetch(url, {
//         method: "POST",
//         headers: {
//           "content-Type": "application/json"
//         },
//         body: JSON.stringify({ editData })
//       });
//       const data = await res.json();
//       console.log(data);
//       if (res.status == 200) {
//         window.location.reload();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleChange = event => {
//     const userCopy = { ...editData };
//     userCopy[event.target.name] = event.target.value;
//     seteditData(userCopy);
//   };

//   useEffect(() => {
//     // callUserPage();
//     console.log(arrayData, "arrayyyy");
//     console.log(arrayKey, "key");
//     console.log(arrayValue, "value");
//   }, [arrayData]);

//   return (
//     <div>
//       {data.data &&
//         data.data.map((arr, ind) => {
//           for (let i in arr) {
//             let data = arr[i];

//             console.log(`${i} : ${data}`);
//             arrayData.push(`${i} : ${data}`);
//             arrayKey.push(`${i}`);
//             arrayValue.push(` ${data}`);
//           }
//         })}

//       <Modal open={open} onClose={onClose} center>
//         <h4>hello  Details </h4>
//         <Form method="post">
//           <h1> jsksks</h1>
//           {/* {displayMapData} */}
//           <h1> {arrayData.title} </h1>
//           <div
//             style={{
//               display: "flex",
//               flexdirection: "row",
//               justifyContent: "center",
//               alignItems: "center"
//             }}
//           >
//             {arrayData.map((val, ind) => {
//               {
//                 /* return <input key={ind} onChange={handleChange} name={arrayKey[ind]} value={arrayValue[ind]} />; */
//               }
//               return (
//                 <p>
//                   {" "}
//                   {arrayKey[ind]} : {arrayValue[ind]}{" "}
//                 </p>
//               );
//             })}
//           </div>
//         </Form>
//       </Modal>
//     </div>
//   );
// }

// export default View;
