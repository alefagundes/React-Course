import { createContext, useReducer } from 'react'

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    switch (action.type) {
        case 'RED':
            return { ...state, color: 'red' }
        case 'BLUE':
            return { ...state, color: 'blue' }
        case 'GREEN':
            return { ...state, color: 'green' }
        case 'YELLOW':
            return { ...state, color: 'yellow' }
        default:
            return state
    }
}

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple' })
    console.log('title color state: ', state)

    return (
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    )
}
