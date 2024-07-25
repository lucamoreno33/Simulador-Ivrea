import logo from '../NavBar/ivreaLogo.png'
import { Link } from 'react-router-dom'
import './Footer.scss'
export const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start Footer">
            <div className='header-container Footer'>
            <Link to='/'><img src={logo} className="header-img" alt='logo ivrea'/></Link>
                
            </div>
            
            
        </footer>
    )
}