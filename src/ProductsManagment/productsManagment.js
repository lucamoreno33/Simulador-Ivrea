import { database } from '../firebase/config'
import { useState } from "react"
import { collection, doc, setDoc } from "firebase/firestore"
import { PMform } from './PMform'
const ProductsManagment = () => {
    
    const [values, setValues] = useState({nombre: '', direccion: '', email: ''})

    const handleInputChange = (e) => setValues({...values, [e.target.name]: e.target.value})

    const addProduct = async (imagen, nombre, precio, descripcion, stock, tipo, NumeroTomo) =>{
        try {
            const articulo = {
                imagen,
                nombre,
                precio,
                descripcion,
                stock,
                tipo,
                NumeroTomo
            };
        
            const productosRef = collection(database, "productos")
            const newDocRef = doc(productosRef);
            await setDoc(newDocRef, articulo);
    
            // Obtener el ID autogenerado
            const docId = newDocRef.id;
    
            // Actualizar el objeto del producto con el ID
            const productoConID = {
                ...articulo,
                id: docId
            };
    
            // Actualizar el documento con el ID en la base de datos
            await setDoc(newDocRef, productoConID);  

            return (
                console.log("producto agregado exitosamente")
            )
        }
        catch (error) {
            console.error('Error al crear el artículo', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const precio =  parseInt(values.precio)
        const stock = parseInt(values.stock)
        const NumeroTomo = parseInt(values.NumeroTomo)
        addProduct(values.imagen, values.nombre, precio, values.descripcion, stock, values.tipo, NumeroTomo)
    }

    return(
        <div>
            <PMform handleSubmit={handleSubmit} handleInputChange={handleInputChange} values={values}/>
        </div>
    )
}

export default ProductsManagment