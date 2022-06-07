import styles from './Login.module.css'
import { useState, useEffect } from 'react'
import { useAuthenticate } from '../../hooks/useAuthentication'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const { login, error: authError, loading } = useAuthenticate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        const user = {
            email,
            password,
        }

        const res = await login(user)

        console.log(res)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.login}>
            <h2>Entrar</h2>
            <p>Faça o loging para poder utilizar o sistema.</p>
            <form onSubmit={handleSubmit}>
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
                {!loading && <button className="btn">Entrar</button>}
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

export default Login
