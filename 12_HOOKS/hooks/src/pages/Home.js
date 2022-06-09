import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseReducerTeste from '../components/HookUseReducerTeste'
import HookUseEffect from '../components/HookUseEffect'

//hooks - react

import { useContext } from 'react' //hook para consumir o contexto
import { SomeContext } from '../components/HookUseContext' //contexto desenvolvido
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'

const Home = () => {
    const { contextValue } = useContext(SomeContext)

    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <h3>Com funcionalidade de Excluir</h3>
            <HookUseReducerTeste />
            <h3>Use Effect</h3>
            <HookUseEffect />
            <h2>useContext</h2>
            <p>Valor do contexto: {contextValue}</p>
            <hr />
            <HookUseRef />
            <HookUseCallback />
            <HookUseMemo />
            <HookUseLayoutEffect />
            <HookUseImperativeHandle />
            <HookCustom />
        </div>
    )
}

export default Home
