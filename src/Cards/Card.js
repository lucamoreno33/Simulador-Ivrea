import { Link } from 'react-router-dom'
import './Card.scss'


export const Card = ({card}) => {
    return(
        <div className='card card-loader'>
                <img src={card.imagen} className="card-imagen" alt={card.nombre}/>
                <div className='card-body'>
                    <h5 className='card-title m-1'>{card.nombre}</h5>
                    <p className='m-1'>Tipo: {card.tipo}</p>
                    <Link to={`/${card.tipo}/${card.id}`} className="card-btn m-1" id="botonCompra">ver mas</Link>
                </div>
            </div>
    )
}

