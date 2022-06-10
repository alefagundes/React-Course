//import { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter'

//import { CounterContext } from '../context/CounterContext'
// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 - context complexo para aleracao de diversos dados - hook useRedece do react
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
    //const { counter } = useContext(CounterContext)
    const { counter } = useCounterContext()

    // 5 context mais complexo
    const { color, dispatch } = useTitleColorContext()

    // 6 - alteradno state color complexo
    const setTitleColor = (color) => {
        dispatch({ type: color })
    }

    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Valor do contador: {counter}</p>
            {/*3 - alterando o valor do contexto*/}
            <ChangeCounter />
            {/*6 - alterando contexto cor */}
            <div>
                <button onClick={() => setTitleColor('RED')}>Vermelho</button>
                <button onClick={() => setTitleColor('BLUE')}>Azul</button>
            </div>
        </div>
    )
}

export default Home
