import { Card } from "../Cards/Card";

const Itemlist = ({ items }) => {
    console.log(items)
    return(
        <div className="d-flex justify-content-center row">
            { items.map((libro) => <Card key={libro.id} card={libro}/>) }
        </div>
    )
}

export default Itemlist