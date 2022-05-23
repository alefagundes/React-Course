import './App.css'
import MyComponent from './components/MyComponent'

import { useState } from 'react'
import Title from './components/Title'

function App() {
    const n = 15
    const [name] = useState('alessandro')
    const redTitle = true

    return (
        <div className="App">
            {/*CSS global*/}
            <h1>React com CSS</h1>
            {/*CSS de componente*/}
            <MyComponent />
            <p>Esse paragrafo eh do app.js</p>
            {/*CSS em line */}
            <p
                style={{
                    color: 'blue',
                    padding: '25px',
                    borderTop: '2px solid red',
                }}
            >
                Esse elemento foi estilizado em line
            </p>
            <p
                style={{
                    color: 'magenta',
                    padding: '25px',
                    borderTop: '2px solid red',
                }}
            >
                Esse elemento foi estilizado em line
            </p>
            {/*CSS inline dinamico */}
            <h2 style={n > 10 ? { color: 'purple' } : { color: 'pink' }}>
                CSS dinamico
            </h2>
            <h2 style={n < 10 ? { color: 'purple' } : { color: 'pink' }}>
                CSS dinamico
            </h2>
            {/*Condicoes para estilos com javaScript no react */}
            <h2
                style={
                    name === 'alessandro'
                        ? { color: 'green', backgroundColor: 'yellow' }
                        : null
                }
            >
                CSS dinamico
            </h2>
            {/*Classe dinamica */}
            <h2 className={redTitle ? 'red-title' : 'title'}>
                Este titulo tera classe dinamica
            </h2>
            {/*CSS module dinamic */}
            <Title />
        </div>
    )
}

export default App
