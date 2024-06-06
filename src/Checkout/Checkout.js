import { useContext, useState } from "react"
import { CheckoutForm } from "./checkoutForm"
import { CartContext } from "../context/CartContext"
import { Navigate } from "react-router-dom"
import { writeBatch,collection, addDoc, getDocs, query, where, documentId} from "firebase/firestore"
import { database } from "../firebase/config"

const Checkout = () =>{
    const {cart, totalCarrito, vaciarCarrito} = useContext(CartContext)

    const [orderID, setOrderID] = useState(null)

    const [values, setValues] = useState({nombre: '', direccion: '', email: ''})

    const handleInputChange = (e) => setValues({...values, [e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const letrasYespacios = /^[a-zA-Z\s]+$/
        const alfanumericoYespacios = /^[a-zA-Z0-9\s]+$/
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!letrasYespacios.test(values.nombre)){
            alert("nombre y apellido solo puede contener letras y espacios")
            return
        }
        if(!alfanumericoYespacios.test(values.direccion)){
            alert("la direccion solo puede contener valores alfanumericos y espacios")
            return
        }
        if(!emailValido.test(values.email)){
            alert("el email no tiene una sintaxis valida")
            return
        }
        
        const orden = {
            cliente: values, 
            items: cart, 
            total: totalCarrito()
        }

        const batch = writeBatch(database)

        const ordersRef = collection(database, "orders") 
        const productosRef = collection(database, "productos")
        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
        const sinstock =[]
        
        const productos = await getDocs(q)
        

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)

            if(doc.data().stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            }else{
                sinstock.push(item)
            }
        })
        if(sinstock.length === 0){
            await batch.commit()
            const { id } = await addDoc(ordersRef, orden)  
            setOrderID(id)
            vaciarCarrito()
        }else{
            alert("hay items sin stock: " + sinstock.map(i => i.nombre).join(", "))
        }
    }

    if (orderID){
        return(
            <div className="container my-5 ordenRealizada">
                <p>Su compra fue realizada con exito </p>
                <br/>
                <p>Guarde su numero de compra</p>
                <p>Numero de compra: <strong>{orderID}</strong></p>
            </div>
        )
    }

    if (cart.length === 0){
        return <Navigate to="/"/>
    }
    

    return(
        <CheckoutForm values={values} handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>

    )
}

export default Checkout