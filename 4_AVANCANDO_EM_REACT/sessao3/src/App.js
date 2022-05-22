import { useState } from 'react'
import './App.css'

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails'
import ChangeMessageState from './components/ChangeMessageState'
import Condicional from './components/Condicional'
import Container from './components/Container'
import ExecutingFunction from './components/ExecutingFunction'
import Fragment from './components/Fragment'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import Message from './components/Message'
import ShowUserName from './components/ShowUserName'
import UserDetails from './components/UserDetails'
//import UserDetails2 from './components/UserDetails2'

function App() {
    const [userName] = useState('maria')
    const car = [
        { id: 1, model: 'civic', color: 'branco', newCar: false, km: 1000 },
        { id: 2, model: 'hilux', color: 'vermelho', newCar: true, km: 0 },
        { id: 3, model: 'corsa', color: 'branco', newCar: false, km: 1000 },
    ]

    const users = [
        { id: 1, name: 'Maria', job: 'bilionaria', age: 31 },
        { id: 2, name: 'alessandro', job: 'developper', age: 21 },
        { id: 3, name: 'marcos', job: 'bancario', age: 17 },
    ]

    function showMessage() {
        console.log('Evento do componente pai')
    }

    const [message, setMessage] = useState('')

    const handleMessage = (msg) => {
        setMessage(msg)
    }

    return (
        <div className="App">
            <h1>Avancando em react</h1>
            <div>
                {/*imagem como add com react*/}
                <img src="/img1.jpg" alt="Paisagem" />
            </div>
            {/*Imagem em assets*/}
            <div>
                <img src={City} alt="Cidade" />
            </div>
            <ManageData />
            <ListRender />
            <Condicional />
            {/*props */}
            <ShowUserName name={userName} />
            {/*Destructuring*/}
            <CarDetails model="hilux" km={8080} color="azul" newCar={false} />
            {/*Reaproveitamento*/}
            <CarDetails model="corsa" km={19000} color="red" newCar={false} />
            <CarDetails model="uno" km={20000} color="amarelo" newCar={true} />
            {/*loop em array de objetos */}
            <p>teste</p>
            {car.map((car) => (
                <CarDetails
                    key={car.id}
                    model={car.model}
                    km={car.km}
                    color={car.color}
                    newCar={car.newCar}
                />
            ))}
            {/*Fragment */}
            <Fragment propFragment="teste" />
            {/*Chilldren utilizacao */}
            <Container myValue="testing">
                <h4>Este eh o filho</h4>
            </Container>
            <Container myValue="alo bb">
                <h4>testando container</h4>
            </Container>
            <ExecutingFunction myFunction={showMessage} />
            {/*State lift */}
            <Message msg={message} />
            <ChangeMessageState handleMessage={handleMessage} />
            {/*<UserDetails2 />*/}
            {/*Desafio tarefa 4 solucao professor */}
            {users.map((user) => (
                <UserDetails
                    key={user.id}
                    name={user.name}
                    job={user.job}
                    age={user.age}
                />
            ))}
        </div>
    )
}

export default App
