import React from "react";
import trash from "../trash-custom.svg";
import { useCart, useDispatchCart } from "../components/ContextReduser";

function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <>
        <div className="m-5 w-100 text-center fs-3"> Cart is empty</div>
      </>
    );
  }

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/orderData", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("Order Response------>",response);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <>
      <div className="container m-auto mt-2 table-responsive table-responsive-sm table-responsive-md">
        <div className="d-flex m-1 mt-2">
          <h4 className="fw-bold flex-grow-1">Total Price: {totalPrice}</h4>
          <button className="btn btn-sm btn-success m-1"
          onClick={handleCheckOut}
          >Check Out</button>
        </div>
        <table
          className="table table-hover "
          style={{ backgroundColor: "rgb(255, 255, 144)" }}
        >
          <thead className="fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col"> Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((food, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td>
                    <button type="button" className="btn p-0">
                      <img
                        src={trash}
                        alt="delete"
                        className="sec"
                        onClick={() =>
                          dispatch({ type: "REMOVE", index: index })
                        }
                      />
                    </button>
                  </td>
                </tr>
              );
              // console.log(food.name, index);
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
