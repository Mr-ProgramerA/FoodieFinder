import React, { createContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reduser = (state,action) => {
    
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer()

    return <></>;
};

export default CartProvider;
