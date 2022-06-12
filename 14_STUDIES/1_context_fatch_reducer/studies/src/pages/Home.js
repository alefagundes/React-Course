import styles from './Home.module.css'

import { myContext } from '../components/HookUseContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import HookUseReducer from '../components/HookUseReducer'
import HookUseFatch from '../components/HookUseFatch'

const Home = () => {
    let { objectCar: carrs } = useContext(myContext)
    console.log(carrs)

    return (
        <div>
            <h2 className={styles.title}>Car Panel Context</h2>
            {!carrs && <p>Carregando...</p>}
            <div className="car-container">
                {carrs &&
                    carrs.map((car) => (
                        <div className={styles.card} key={car.id}>
                            <h2>{car.name}</h2>
                            <p>{car.age}</p>
                            <Link to="/about">Ver detalhes</Link>
                        </div>
                    ))}
            </div>
            <hr />
            <HookUseReducer />
            <HookUseFatch />
        </div>
    )
}

export default Home
