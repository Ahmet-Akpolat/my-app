import { createContext } from "react";

export const CartContext = createContext({})

export const CartProvider = () => {
    return 
    <CartContext.Provider value={"a"}>

    </CartContext.Provider>
}