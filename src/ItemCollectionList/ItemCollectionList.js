import { CtCard } from "../CollectionCards/CollectionCard";
import './ItemCollectionList.scss'
const ItemCollectionlist = ({ items }) => {
    const OrderedItems = items.sort((a, b) => a.NumeroTomo - b.NumeroTomo)
    console.log(OrderedItems)
    let TomoUnico = false;

    // Verificar si hay más de un nombre de libro
    if (OrderedItems.length > 1) {
        if (OrderedItems[0].nombre !== OrderedItems[1].nombre) {
            TomoUnico = true;
        }
    }

    return(
        <div className="my-5 ItemCollectionList">
            <h2 className="ItemCollectionList-title" >{TomoUnico ? `Otros ${OrderedItems[0].tipo}` : 'Otros tomos'}</h2>
            { OrderedItems.map((libro) => <CtCard key={libro.id} card={libro} tomoUnico={TomoUnico}/>) }
        </div>
    )
}

export default ItemCollectionlist

