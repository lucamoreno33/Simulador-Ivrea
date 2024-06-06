import "./ItemCount.scss"
const ItemCount = ({stock, cantidad, setCantidad, agregar}) => {
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }
    return (
            <div className="itemCount">
                
                <div className="itemCount-botonera">
                    <button 
                        onClick={handleRestar} 
                        className={`btn itemCount-menos`}
                        disabled={cantidad === 1 || stock === 0}
                    >
                        -
                    </button>

                    <span className="">{cantidad}</span>

                    <button 
                        onClick={handleSumar} 
                        className={`btn itemCount-mas`}
                        disabled={cantidad === stock || stock === 0}>
                        +
                    </button>
                </div>
                <button disabled={stock === 0} onClick={agregar} className="btn itemCount-buy mx-3">Agregar al carrito</button>
            </div>
    )
}

export default ItemCount