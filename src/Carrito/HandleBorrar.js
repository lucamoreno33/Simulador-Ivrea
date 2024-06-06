import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"




const HandleBorrar = (objetivo) =>{
    
        const {cart, setCart} = useContext(CartContext)
        useEffect(() => {
            const index = cart.indexOf(objetivo)
            cart.splice(index,1)
            setCart(cart)
        },[cart])
        
    }

export default HandleBorrar