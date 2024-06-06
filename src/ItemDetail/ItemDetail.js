import { useContext, useState } from "react"
import "./ItemDetail.scss"
import { CartContext } from "../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"



const ItemDetail = ({item}) => {
    
    
    const { agregarAlCarrito, estaEnCarrito} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const handleAgregar = () =>{
        const newItem = {...item, cantidad}
        agregarAlCarrito(newItem)
    }
    return(
        <div className='ItemDetail'> 
            <div className='ItemDetail-main'>
                <img src={`${item.imagen}`} alt={item.nombre} className="ItemDetail-imagen"/>
                <div className='ItemDetail-data'>
                    <h2 className="fs-6">Titulo: <strong>{item.nombre}</strong></h2>
                    <p className="my-4">Numero de tomo: {item.NumeroTomo}</p>
                    <p className='ItemDetail-precio'>Precio: ${item.precio}</p>
                    <p className='ItemDetail-texto '><strong>Sinopsis: </strong>{item.descripcion}</p>
                    {
                        estaEnCarrito(item.id)
                            ? <div className="d-flex">
                                <Link  to="/carrito" className="btn btn-success ItemDetail-link">Terminar mi compra</Link>
                                <Link to="/" className="btn btn-success ItemDetail-link">Seguir Comprando</Link>
                            </div>
                            : <div className="ItemDetail-Count">
                                <ItemCount 
                                    stock={item.stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    agregar={handleAgregar}
                                />
                            </div>
                    }
                </div>
            </div>    
        </div>
    )
}

export default ItemDetail
