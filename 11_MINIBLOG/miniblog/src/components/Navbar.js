import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

import { useAuthenticate } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

const Navbar = () => {
    //get if have a user in session
    const { user } = useAuthValue()
    const { logout } = useAuthenticate()

    return (
        <div>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.brand}>
                    Blog do <span>Ale</span>
                </NavLink>
                <ul className={styles.links_list}>
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
                    {/*if have a user, inform a links to acess - create post and dashboard */}
                    {!user && (
                        <>
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        isActive ? styles.active : ''
                                    }
                                >
                                    Cadastrar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? styles.active : ''
                                    }
                                >
                                    Entrar
                                </NavLink>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                            <li>
                                <NavLink
                                    to="/posts/create"
                                    className={({ isActive }) =>
                                        isActive ? styles.active : ''
                                    }
                                >
                                    Criar Post
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        isActive ? styles.active : ''
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        </>
                    )}
                    {user && (
                        <li>
                            <button onClick={logout}>Sair</button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
