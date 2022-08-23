import './Auth.css'

//components
import { Link } from 'react-router-dom'

//hooks
import { useState, useEffect } from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const handleSubtmit = (e) => {
        e.preventDefault()
        const user = {
            name,
            email,
            password,
            confirmpassword,
        }
        console.log(user)
    }

    return (
        <div id="register">
            <h2>ReactGram</h2>
            <p className="subtitle">
                Cadastre-se para ver as fotos dos seus amigos.
            </p>
            <form onSubmit={handleSubtmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={name || ''}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={email || ''}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Informe uma senha"
                    value={password || ''}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                    value={confirmpassword || ''}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input type="submit" value="Cadastrar" />
            </form>
            <p>
                Já possui conta? <Link to="/login">Clique aqui!</Link>
            </p>
        </div>
    )
}

export default Register
