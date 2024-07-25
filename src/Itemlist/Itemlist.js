import { Card } from "../Cards/Card";

const Itemlist = ({ items }) => {
    console.log(items)
    return(
        <div className="flex-wrap d-flex justify-content-center w-100">
            { items.map((libro) => <Card key={libro.id} card={libro}/>) }
        </div>
    )
}

export default Itemlist