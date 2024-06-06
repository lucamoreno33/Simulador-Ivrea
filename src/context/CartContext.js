import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {setCart([...cart, item])}

    const estaEnCarrito = (id) => cart.some((prod) => prod.id === id)

    const cantidadCarrito = () => cart.reduce((acc, prod) => acc + prod.cantidad, 0)

    const totalCarrito = () => cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio,0)

    const handleBorrar = (id) => setCart(cart.filter(((prod) => prod.id !== id)))

    const vaciarCarrito = () => setCart([])

    return(
        <CartContext.Provider value={{cart, agregarAlCarrito, estaEnCarrito, cantidadCarrito, vaciarCarrito, handleBorrar, totalCarrito}}>
            {children}
        </CartContext.Provider>
    )

}
