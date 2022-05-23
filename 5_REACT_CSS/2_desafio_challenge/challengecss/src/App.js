import './App.css'
import Car from './components/Car'

const car = [
    { id: 1, modelo: 'civic', km: 80000, age: 2015, newCar: false },
    { id: 2, modelo: 'centra', km: 50000, age: 2010, newCar: false },
    { id: 3, modelo: 'astra', km: 70000, age: 2012, newCar: false },
    { id: 4, modelo: 'Hilux', km: 0, age: 2022, newCar: true },
]

function App() {
    return (
        <div className="App">
            <h1>Projeto Desafio challenge</h1>
            <div className="car-container">
                {car.map((car) => (
                    <Car car={car} key={car.id} />
                ))}
            </div>
        </div>
    )
}

export default App
