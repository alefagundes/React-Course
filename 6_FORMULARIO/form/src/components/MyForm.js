import './MyForm.module.css'

import { useState } from 'react'

const MyForm = ({ user }) => {
    //3 - Gerenciamento de mudança de dados.
    //6 - Controlled input

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }
    /*  console.log('name:', name)
    console.log('email:', email)
 */
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviando o formulario')
        console.log(name, email, bio, role)

        //7 - limpa formulario
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    const handleBio = (e) => {
        setBio(e.target.value)
    }

    return (
        <div>
            {/*Envio de form */}
            {/* 3 - Criacao de formularios funcao setNem -> handleName */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite o nome:"
                        onChange={handleName}
                        value={name}
                    />
                </div>
                {/*2 - Label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    <input
                        type="text"
                        name="email"
                        placeholder="Digite seu email:"
                        //* 4 - Simplificação useState na função. */
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                {/*Text area */}
                <label htmlFor="bio">
                    <span>Bio:</span>
                    <textarea
                        name="bio"
                        placeholder="Descricao do user"
                        onChange={handleBio}
                        value={bio}
                    ></textarea>
                </label>

                <label>
                    <span>Funcao</span>
                    <select
                        name="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        <option value="user">Usuario</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm
