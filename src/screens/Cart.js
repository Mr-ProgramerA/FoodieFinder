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

  const totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <>
      <div
           className="container m-auto mt-2 table-responsive table-responsive-sm table-responsive-md">
      <div className="d-flex m-1 mt-2">
        <h4 className="fw-bold flex-grow-1">Total Price: {totalPrice}</h4>
      <button className="btn btn-sm btn-success m-1">Check Out</button>
      </div>  
        <table className="table table-hover "
        style={{backgroundColor:"rgb(255, 255, 144)"}}
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
    // data.map((food=>{
    //   return(
    //     <div>
    //       <img src={trash} alt="" srcset="" />
    //     </div>
    //   )
    // }))
  );
}

// ============ testing logic --> putting order summary just above the footer ================ //
//   let priceholder = 0
//   return data.length === 0 ? (
//     <div> no data</div>
//   ) : (
//     <div className="p-4">
//       <h3>order summary:</h3>
//       <hr />
//       {
//        data.map((item) => {
//         priceholder+=item.price
//         return (
//           <div>
//             <span>{item.name}</span>
//             {":  size: "}
//             <span>{item.size}</span>
//             {":  quantity: "}
//             <span>{item.qty}</span>
//             {":  price: "}
//             <span>{item.price}</span>
//           </div>
//         );
//       })}
//       <hr />
//       <h4>final price:- {priceholder}</h4>
//     </div>
//   );
// }

export default Cart;
