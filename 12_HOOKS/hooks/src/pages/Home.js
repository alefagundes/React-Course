import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseReducerTeste from '../components/HookUseReducerTeste'
import HookUseEffect from '../components/HookUseEffect'

const Home = () => {
    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <h3>Com funcionalidade de Excluir</h3>
            <HookUseReducerTeste />
            <h3>Use Effect</h3>
            <HookUseEffect />
        </div>
    )
}

export default Home
