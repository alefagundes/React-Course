import { useContext } from 'react' //hook do react para usar os contextos
import { SomeContext } from '../components/HookUseContext'

const About = () => {
    const { contextValue } = useContext(SomeContext)

    return (
        <div>
            <h1>About</h1>
            <h3>Estou utilizando o contexto tbm: {contextValue}</h3>
        </div>
    )
}

export default About
