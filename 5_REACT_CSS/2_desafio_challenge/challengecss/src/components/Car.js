import style from './Car.module.css'

const Car = ({ car }) => {
    return (
        <div className={style.card}>
            <h2 className={style.class_h2}>modelo: {car.modelo}</h2>
            <p className={style.class_h3}>km: {car.km}</p>
            <p>ano: {car.age}</p>
            {car.newCar ? <p>Carro novo</p> : null}
        </div>
    )
}

export default Car
