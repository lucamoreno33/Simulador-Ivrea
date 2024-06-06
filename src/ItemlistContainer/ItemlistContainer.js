import "./contenedor.scss"
import { useEffect, useState } from 'react'
import Itemlist from '../Itemlist/Itemlist'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { database } from '../firebase/config'


export const ItemlistContainer = () => {
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)
    const {TipoLibro} = useParams()

    useEffect(() => {
        setLoading(true)
        const coleccionProductos = collection(database, "productos")
        
        const filtro = TipoLibro
                        ? query(coleccionProductos, where("tipo", "==", TipoLibro))
                        : coleccionProductos
        getDocs(filtro)
            .then((res) => {
                const tomoUnoLibros = res.docs.filter((doc) => doc.data().NumeroTomo === 1);
                setLibros(tomoUnoLibros.map((doc) => doc.data()));
            })
            .finally(() => setLoading(false))
    }, [TipoLibro])
    const marcadoresCarga = Array.from({ length: 100 }).map((_, index) => (
        < div key={index} className=" card placeholder"/>
            
        
    ));
    return (
        
        <section className='d-flex flex-column seccion'>
            <h2 className="subtitulo mx-2">Novedades de la semana</h2>
            {loading
            ? <div className="my-2 d-flex row justify-content-center">{marcadoresCarga}</div>
            : <div className=" my-2">   
                <Itemlist items={libros}/>
                </div>
            }
            
        </section>
    )
} 