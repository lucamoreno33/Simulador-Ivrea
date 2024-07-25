import { Link } from 'react-router-dom'
import './CollectionCard.scss'


export const CtCard = ({card, tomoUnico}) => {
    return(
        <div className='Ctcard d-flex'>
            <img src={card.imagen} className="Ctcard-imagen" alt={card.nombre}/>
            <div className='Ctcard-body'>
                <h5 className='Ctcard-title m-1'>
                    {/* si la lista es de otras obras no muestra el numero de tomo */}
                    {card.nombre} {tomoUnico ? '' : `#${card.NumeroTomo}`}
                </h5>
                <p className='m-1'>Tipo: {card.tipo}</p>
                <div className='Ctcard-btn-container'>
                    <Link to={`/${card.tipo}/${card.id}`} className="Ctcard-btn m-1" id="botonCompra">ver mas</Link>
                </div>
                
            </div>
        </div> 
    )
}
