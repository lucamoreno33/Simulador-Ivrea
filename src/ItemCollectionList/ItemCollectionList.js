import { CtCard } from "../CollectionCards/CollectionCard";
import './ItemCollectionList.scss'
const ItemCollectionlist = ({ items }) => {
    const OrderedItems = items.sort((a, b) => a.NumeroTomo - b.NumeroTomo)
    return(
        <div className="my-5 ItemCollectionList">
            <h2 className="ItemCollectionList-title" >OTROS TOMOS</h2>
            { OrderedItems.map((libro) => <CtCard key={libro.id} card={libro}/>) }
        </div>
    )
}

export default ItemCollectionlist