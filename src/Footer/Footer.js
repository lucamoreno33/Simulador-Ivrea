import logo from '../NavBar/ivreaLogo.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start">
            <div className='header-container '>
            <Link to='/'><img src={logo} className="header-img" alt='logo ivrea'/></Link>
                
            </div>
            
        </footer>
    )
}