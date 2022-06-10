//1 - criar contexto

import { createContext, useState } from 'react'

export const CounterContext = createContext()

//2- criar provider

//propriedade de children para poder importar o contexto em demais componentes

export const CouterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
}
