import React, { useState } from 'react'

const ManageData = () => {
    let someData = 10

    console.log(someData)

    const [number, setNumber] = useState(15)
    console.log(`number: ${number}`)

    return (
        <div>
            <p> valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>
            <div>
                <p>Valor eh : {number}</p>
                <button onClick={() => setNumber(25)}>Mudar State</button>
            </div>
        </div>
    )
}

export default ManageData
