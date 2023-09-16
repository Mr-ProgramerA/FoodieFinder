import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reduser = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];

      case "UPDATE":
        const arr = [...state]
        let updatedArr = arr
        arr.find((food,index)=> {
          if(food.id === action.id){

            console.log("food qty:",food.qty,
            "new action qty:", parseInt(action.qty),
            "final quantity:", food.qty + parseInt(action.qty),
            "\nprevious price",food.price,
            "new action.price:",action.price,
            "final price:", food.price + action.price);
          console.log("\n\n=============", arr,"\n============");

          updatedArr[index] = {...food,
            qty:parseInt(action.qty) + parseInt(food.qty),
            price: action.price+ food.price
          }
           console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n",updatedArr); 
        }
      })
      return updatedArr

      case "REMOVE":
        const newArr = [...state]
      newArr.splice(action.index,1)
      return newArr
    default:
      console.log("error in reduser");
      break;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, []);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
