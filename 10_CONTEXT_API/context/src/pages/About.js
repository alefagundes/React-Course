import { useContext } from 'react'

import { CounterContext } from '../context/CounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const About = () => {
    const { counter, setCounter } = useContext(CounterContext)

    // 5 context mais complexo
    const { color, dispatch } = useTitleColorContext()

    // 6 - alteradno state color complexo
    const setTitleColor = (color) => {
        dispatch({ type: color })
    }

    return (
        <div>
            <h1 style={{ color: color }}>About</h1>
            {/*Aproveitando o contexto para a insercao */}
            <p>Valor do contexto - counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Add context(counter) more
            </button>
            {/*6 - teste com outras cores por mim proprio yellow e green */}
            <div>
                <button onClick={() => setTitleColor('YELLOW')}>Yellow</button>
                <button onClick={() => setTitleColor('GREEN')}>Green</button>
            </div>
        </div>
    )
}

export default About
