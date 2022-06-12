import { createContext } from 'react'

export const myContext = createContext()

const HookUseContext = ({ children }) => {
    let objectCar = [
        { id: 1, name: 'civic', age: 2018 },
        { id: 2, name: 'hrv', age: 2019 },
    ]
    return (
        <myContext.Provider value={{ objectCar }}>
            {children}
        </myContext.Provider>
    )
}

export default HookUseContext
