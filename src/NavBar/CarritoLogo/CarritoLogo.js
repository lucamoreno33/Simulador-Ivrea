import { BsCart4 } from 'react-icons/bs'
import './CarritoLogo.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CarritoLogo = () => {
    const { cantidadCarrito } = useContext(CartContext)
    return(
            <Link to="/carrito" className='carrito d-flex'>
                <BsCart4 className='carrito-logo'/>
                <div className='carrito-cantidad'>
                <span>{cantidadCarrito()}</span>  
                </div>
            </Link>
    )

}
export default CarritoLogo
