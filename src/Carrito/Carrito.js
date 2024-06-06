import "./Carrito.scss"
import CardCarrito from './CardCarrito'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Carrito = () =>{
    const {cart, vaciarCarrito, totalCarrito} = useContext(CartContext)
        return( 
            <section id="carro" className="container carro">
                <h2>Tu compra</h2>
                {cart.map((item) => (
                    <CardCarrito key={item.id} item={item}/>))
                }
                <h3 className="carro-total">TOTAL: {totalCarrito()}</h3>
                <button className="carro-vaciar btn" onClick={vaciarCarrito}>vaciar carrito</button>
                <Link to="/Checkout" className="btn carro-vaciar">Terminar mi compra</Link>
            </section>
        )

}

export default Carrito
