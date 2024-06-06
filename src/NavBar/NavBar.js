import logo from './ivreaLogo.png'
import './NavBar.scss'
import CarritoLogo from './CarritoLogo/CarritoLogo'
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

export const NavBar = () => {
    useEffect(() => {
        // Espera a que el DOM esté completamente cargado
        
            const nav = document.querySelector('#nav');
            const abrir = document.querySelector('#abrir');
            const cerrar = document.querySelector('#cerrar');

            abrir.addEventListener('click', () => {
                nav.classList.add('visible');
            });

            cerrar.addEventListener('click', () => {
                nav.classList.remove('visible');
            });
    }, []);

    return (
        <header className='header'>
            <div className='header-container '>
            <Link to='/'><img src={logo} className="header-img" alt='logo ivrea'/></Link>
            <button id="abrir" className="abrir-menu"><BsList /></button>
                <nav className='Navbar' id="nav" >
                <button className="cerrar-menu" id="cerrar"><BsX /></button>
                    <ul className='Navbar-list'>
                        <li className="Navbar-li">
                            <Link to='/mangas' className="Navbar-link ">Mangas</Link>
                        </li>
                        <li className="Navbar-li">
                            <Link to='/libros' className="Navbar-link ">Libros</Link>
                        </li>
                        <li className="Navbar-li">
                            <Link to='/comics' className="Navbar-link">Comics</Link>
                        </li>
                    </ul>
                </nav>
                <CarritoLogo/>
            </div>
            
        </header>
    )
}