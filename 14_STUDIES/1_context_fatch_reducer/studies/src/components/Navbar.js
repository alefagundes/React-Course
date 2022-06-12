import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.brand}>
                    <span>Ale</span> Studies
                </NavLink>
                <ul className={styles.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles.active : ''
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? styles.active : ''
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
