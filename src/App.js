import "./App.scss"
import './NavBar/NavBar'
import { NavBar } from './NavBar/NavBar';
import { Footer } from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemlistContainer } from "./ItemlistContainer/ItemlistContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Carrito from "./Carrito/Carrito";
import Checkout from "./Checkout/Checkout";
import ProductsManagment from "./ProductsManagment/productsManagment";
function App() {
  document.body.style = 'background: #ecf0f1 ;';

  return(
    <CartProvider>
      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemlistContainer/>}/>
          <Route path="/:TipoLibro" element={<ItemlistContainer/>}/>
          <Route path="/:Tipolibro/:libroId" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="*" element={<navigate to={"/"}/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/api/products" element={<ProductsManagment/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
)}

export default App;
