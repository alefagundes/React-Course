import { MyComponent } from './MyComponent'

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu primeiro component</h1>
            <p className="Nos">Alezinho</p>
            <MyComponent />
            {/* Aqui o MyComponent eh tratado como filho do componente First */}
        </div>
    )
}

export default FirstComponent
