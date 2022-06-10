import { useContext } from 'react'

import { CounterContext } from '../context/CounterContext'

export const useCounterContext = () => {
    const context = useContext(CounterContext)

    if (!context) {
        console.log('contexto n encontrado')
    }

    return context
}
