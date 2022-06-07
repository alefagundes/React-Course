import styles from './Register.module.css'

import { useState, useEffect } from 'react'
import { useAuthenticate } from '../../hooks/useAuthentication'

const Register = () => {
    const [displayName, setdisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassord, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = useAuthenticate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        const user = {
            displayName,
            email,
            password,
        }

        if (password !== confirmPassord) {
            setError('As senhas precisam ser iguais!')
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h2>Cadastre-se para postar</h2>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do usúario"
                        value={displayName}
                        onChange={(e) => setdisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usúario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Senha do usúario"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Confirme a sua senha"
                        value={confirmPassord}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                {!loading && <button className="btn">Cadastrar</button>}
                {loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                )}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Register
