import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">Sobre</NavLink>
                <NavLink to="/product">Product</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
