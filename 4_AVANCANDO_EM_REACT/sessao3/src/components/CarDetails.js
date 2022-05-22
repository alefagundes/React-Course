const CarDetails = ({ model, km, color, newCar }) => {
    return (
        <div>
            <h2>Detalhes do carro:</h2>
            <ul>
                <li>Modelo: {model}</li>
                <li>KM: {km}</li>
                <li>Cor:{color}</li>
            </ul>
            {newCar && <li>Este carro eh novo</li>}
        </div>
    )
}

export default CarDetails
