import React, { useEffect, useState } from "react";
import Card from "../../custom-modal/Card";
import CustomModal from "../../custom-modal/CustomModal";
import View from "../../custom-modal/View";

const Home = () => {
  const [userData, setuserData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);

  const [data, setData] = useState();
  // let allData = [];

  const callUserPage = async () => {
    try {
      const url = "/user/details";
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      console.log(data, "daata");

      setuserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (id, user) => {
    try {
      const url = "/form/delete";
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _id: id
        })
      });

      const data = await res.json();
      callUserPage();

      setuserData(...data);
      if (!res.status == 200) {
        const error = new Error(res.error);
        throw error;
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callUserPage();
  }, []);

  useEffect(() => {
    console.log(userData, "my data");
  }, [userData]);

  return (
    <div>
      <div>
        {userData.length > 0 ? (
          <h1 style={{ textAlign: "center", margin: "20px" }}>
            All the forms available here.
          </h1>
        ) : (
          <div className="home_forms">
            <h1> Forms </h1>
            <p>You have no forms created yet. </p>
          </div>
        )}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignSelf: "center",
              width: "90%"
            }}
          >
           
            {userData.map(obj => (
              <>
                <Card
                  data={obj}
                  onClick={data => {
                    setOpenModal(true);

                    setData(data);
                  }}
                  onClickView={data => {
                    setOpenModal1(true);
                    setData(data);
                  }}
                  onDelete={data => {
                    const id = data._id;
                    console.log(id);
                    deleteUser(id);
                    console.log(data);
                  }}
                />
              </>
            ))}
          </div>
          {openModal && (
            <>
              <CustomModal
                open={openModal}
                onClose={() => {
                  setOpenModal(false);
                }}
                data={data}
              />
            </>
          )}

          {openModal1 && (
            <>
              <View
                open={openModal1}
                onClose={() => {
                  setOpenModal1(false);
                }}
                data={data}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
