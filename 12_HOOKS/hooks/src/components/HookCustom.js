//hooks
import { usePreviews } from '../hooks/usePreviews'
import { useState } from 'react'

const HookCustom = () => {
    const [number, setNumber] = useState(0)
    const previouValue = usePreviews(number)

    return (
        <div>
            <h2>HookCustom</h2>
            <p>Atual: {number}</p>
            <p>Antigo: {previouValue}</p>
            <button onClick={() => setNumber(Math.random())}>Add</button>
            <hr />
        </div>
    )
}

export default HookCustom
