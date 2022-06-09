import { useState, useMemo, useEffect } from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    //const premiumNumbers = ['0', '100', '200'] - utilizacao do use memo serve para manter a referencia a um objeto ou dado
    //isso eh itil devido as proporcoes que o sistema/base de dados pode tomar. Imagine a perdao de processamento
    //computacional devido a o reloading da base 1000 vezes/ 1kk de vezes.

    //jeito correto usando o useMemo mantendo referencia ao objeto
    const premiumNumbers = useMemo(() => {
        return ['0', '10', '100', '1000']
    }, [])

    useEffect(() => {
        console.log('Premium numbers foi alterado')
    }, [premiumNumbers])

    return (
        <div>
            <h2>HookUseMemo</h2>
            <input
                type="text"
                name="premium"
                onChange={(e) => setNumber(e.target.value)}
            />
            {premiumNumbers.includes(number) ? <p>Acertou o numero</p> : null}
            <hr />
        </div>
    )
}

export default HookUseMemo
