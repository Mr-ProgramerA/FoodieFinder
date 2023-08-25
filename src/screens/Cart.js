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
  return(
    <>
    <div>
        
    </div>
    </>
  )
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
