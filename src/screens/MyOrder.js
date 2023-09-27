// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const MyOrder = () => {
//   // const [orderData, setorderData] = useState({});

//   const fetchMyOrder = async () => {
//     console.log(localStorage.getItem("userEmail"));
//     await fetch("http://localhost:5000/api/myOrderData", {
//       // credentials: 'include',
//       // Origin:"http://localhost:3000/login",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: localStorage.getItem("userEmail"),
//       }),
//     }).then(async (res) => {
//       let response = await res.json();
//       console.log(response);
//       // await setorderData(response);
//     });
//   };

//   // useEffect(() => {
//   //   fetchMyOrder();
//   // }, []);
//   // let a = { a1: 1, a2: 2, a3: 3, a4: 4, a5: 5 };
// // setorderData( {
// let orderData = ({
//   "_id": {
//     "$oid": "6513f17f16b0d4631bf08122"
//   },
//   "email": "newtest1@gmail.com",
//   "order_data": [
//     [
//       {
//         "Order_date": "Wed Sep 27 2023"
//       },
//       {
//         "id": "643aee61fe332d9a9087aa66",
//         "name": "Chicken Biryani",
//         "qty": 1,
//         "size": "half",
//         "price": 170
//       },
//       {
//         "id": "643aee61fe332d9a9087aa69",
//         "name": "Prawns Fried Rice",
//         "qty": "2",
//         "size": "half",
//         "price": 240
//       }
//     ]
//   ],
//   "__v": 0
// })

// console.log(Array.isArray(orderData.order_data));

//   return (
//     <>
//       <Navbar />

//       <div className="container mt-3 m-auto">
//         {/* {Array(orderData).map((item, index) => {
          
//           if (Array.isArray(item)) {
            
//             console.log("hell");

//           }

          
//         })} */}

//         <div className="card" style={{ width: "18rem" }}>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <h6 className="card-subtitle mb-2 text-body-secondary">
//               Card subtitle
//             </h6>
//             <p className="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href="#" className="card-link">
//               Card link
//             </a>
//             <a href="#" className="card-link">
//               Another link
//             </a>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default MyOrder;

// self code above
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5000/api/myOrderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });

    // await res.map((data)=>{
    //    console.log(data)
    // })
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="">
          {orderData != {}
            ? Array(orderData).map((data) => {
                return data.orderData
                  ? data.orderData.order_data
                      .slice(0)
                      .reverse()
                      .map((item) => {
                        return item.map((arrayData) => {
                          return (
                            <div className="">
                              {arrayData.Order_date ? (
                                <div className=" mt-4">
                                  {(data = arrayData.Order_date)}
                                  <hr />
                                </div>
                              ) : (
                                <div className="col m-auto">
                                  <div
                                    className=" col card mt-3"
                                    style={{
                                      width: "16rem",
                                      maxHeight: "360px",
                                    }}
                                  >
                                    {/* <img
                                      src={arrayData.img}
                                      className="card-img-top"
                                      alt="..."
                                      style={{
                                        height: "120px",
                                        objectFit: "fill",
                                      }}
                                    /> */}
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        {arrayData.name}
                                      </h5>
                                      <div
                                        className="container w-100 p-0"
                                        style={{ height: "38px" }}
                                      >
                                        <span className="m-1">
                                          {arrayData.qty}
                                        </span>
                                        <span className="m-1">
                                          {arrayData.size}
                                        </span>
                                        <span className="m-1">{data}</span>
                                        <div className=" d-inline ms-2 h-100 w-20 fs-5">
                                          ₹{arrayData.price}/-
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        });
                      })
                  : "";
              })
            : ""}
        </div>
      </div>

      <Footer />
    </div>
  );
}
 // {"orderData":{"_id":"63024fd2be92d0469bd9e31a","email":"mohanDas@gmail.com","order_data":[[[{"id":"62ff20fbaed6a15f800125e9","name":"Chicken Fried Rice","qty":"4","size":"half","price":520},{"id":"62ff20fbaed6a15f800125ea","name":"Veg Fried Rice","qty":"4","size":"half","price":440}],"2022-08-21T15:31:30.239Z"],[[{"id":"62ff20fbaed6a15f800125f4","name":"Mix Veg Pizza","qty":"4","size":"medium","price":800},{"id":"62ff20fbaed6a15f800125f3","name":"Chicken Doub;e Cheeze Pizza","qty":"4","size":"regular","price":480}],"2022-08-21T15:32:38.861Z"]],"__v":0}}
// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function MyOrder() {
//   const [orderData, setOrderData] = useState([]);

//   const fetchMyOrder = async () => {
//     const userEmail = localStorage.getItem("userEmail");
//     if (!userEmail) return; // Handle the case where userEmail is not available

//     try {
//       const response = await fetch("http://localhost:5000/api/myOrderData", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: userEmail,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         if (Array.isArray(data.order_data)) {
//           setOrderData(data.order_data);
//         } else {
//           console.error("order_data is not an array:", data.order_data);
//           // You can handle this case by setting an appropriate state or displaying an error message.
//         }
//       } else {
//         console.error("Failed to fetch data");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMyOrder();
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       <div className="container">
//         <div className="row">
//           {orderData.length > 0 &&
//             orderData.map((item, index) => (
//               <div key={index}>
//                 {item.Order_data ? (
//                   <div className="m-auto mt-5">
//                     {item.Order_data}
//                     <hr />
//                   </div>
//                 ) : (
//                   <div className="col-12 col-md-6 col-lg-3">
//                     <div
//                       className="card mt-3"
//                       style={{
//                         width: "16rem",
//                         maxHeight: "360px",
//                       }}
//                     >
//                       {/* ... (card content) */}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
