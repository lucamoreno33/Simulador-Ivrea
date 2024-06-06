import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemCollectionList from "../ItemCollectionList/ItemCollectionList"
import "./ItemDetailContainer.scss"
import { getDoc, getDocs , doc, collection, query, where } from "firebase/firestore"
import { database } from "../firebase/config"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const [libros, setLibros] = useState([])
    const { libroId } = useParams()
    const coleccionProductos = collection(database, "productos")
    useEffect(() => {
        setLoading(true)
        const documentoLibro = doc(database, "productos", libroId)
        getDoc(documentoLibro)
            .then((doc) => {
                setItem(doc.data())
                const coleccionDelLibro = query(coleccionProductos, where("nombre", "==", doc.data().nombre))
                getDocs(coleccionDelLibro)
                    .then((querySnapshot) => {
                        const librosArray = querySnapshot.docs.map((doc) => doc.data())
                        setLibros(librosArray)
                    })
            })
        .finally(() => setLoading(false))}
    , [libroId])
    return(
        <div className="containerDetail my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <div>
                        <ItemDetail item={item}/>
                        
                        <div className="d-flex my-5">   
                            
                            <ItemCollectionList items={libros}/>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer