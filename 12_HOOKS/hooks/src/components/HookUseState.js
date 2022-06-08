import { useState } from 'react'

const HookUseState = () => {
    // 1 - useState

    let userName = 'joao'

    const [name, setName] = useState('Alessandro')
    //mudanca de input com useState
    const [texto, setTexto] = useState()

    const changeName = () => {
        setName('Teste um dois')
    }

    //2 - useState in input
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(texto)
    }

    return (
        <div>
            {/*1 - useState */}
            <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>

            <button onClick={changeName}>Mudar nome</button>
            <hr />
            {/* 2 - useState in input */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="texto"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
            <p>seu texto eh: {texto}</p>
        </div>
    )
}

export default HookUseState
