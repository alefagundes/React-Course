import { useState } from 'react'

const Condicional = () => {
    const [x] = useState(false)

    const [name, setName] = useState('alessandro')

    return (
        <div>
            <h1>isso sera exibido?</h1>
            {/* && utilizado para fazer condicao para a impressao atravez do JSX, o mesmo define se a condicao for simples, no caso no caso apenas um if unico. */}
            {x && <p>X = true, sim!</p>}
            {!x && <p>x = false!</p>}

            {/*Condicional com JSX definindo visualizacao na page */}
            {name === 'joao' ? (
                <div>
                    <p>O nome eh joao!</p>
                </div>
            ) : (
                <div>
                    <p>Nome nao encontrado</p>
                </div>
            )}
            <button onClick={() => setName('joao')}>mudar para joao</button>
        </div>
    )
}

export default Condicional
