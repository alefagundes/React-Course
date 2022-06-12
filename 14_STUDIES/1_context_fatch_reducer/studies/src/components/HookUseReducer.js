import { useContext, useReducer } from 'react'
import { myContext } from './HookUseContext'
import { useState } from 'react'

//styles
import styles from './HookUseReducer.module.css'

const HookUseReducer = () => {
    let { objectCar: cars } = useContext(myContext)

    const addCar = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case 'add':
                const newCar = {
                    id: Math.random(),
                    name: carName,
                    age: carAge,
                }
                setCarName('')
                setCarAge('')
                return [...state, newCar]
            case 'dell':
                return state.filter((car) => car.id !== action.id)
            // eslint-disable-next-line no-fallthrough
            default:
                return state
        }
    }
    const [carName, setCarName] = useState('')
    const [carAge, setCarAge] = useState('')

    const [totalCars, dispatch] = useReducer(addCar, cars)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'add' })
    }
    const handleDelete = (id) => {
        dispatch({ type: 'dell', id })
    }

    return (
        <div>
            <h3>Cars Add and remove</h3>
            <div className={styles.formu}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome do carro:
                        <input
                            type="text"
                            name={carName}
                            value={carName}
                            onChange={(e) => setCarName(e.target.value)}
                        />
                    </label>
                    <label>
                        Ano do Carro:
                        <input
                            type="text"
                            name={carAge}
                            value={carAge}
                            onChange={(e) => setCarAge(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Criar" />
                </form>
            </div>
            <div className={styles.car_cont}>
                {totalCars &&
                    totalCars.map((carros) => (
                        <div key={carros.id} className={styles.car_card}>
                            <h2>{carros.name}</h2>
                            <p>{carros.age}</p>
                            <button onClick={() => handleDelete(carros.id)}>
                                deletar
                            </button>
                        </div>
                    ))}
            </div>
            <hr />
        </div>
    )
}

export default HookUseReducer
