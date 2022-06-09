//import do context
import { createContext } from 'react'

//este hook eh utilizado para prover um valor entre os componentes em geral na applicacao desenvolvida

export const SomeContext = createContext()

export const HookUseContext = ({ children }) => {
    //{children} se refere aos componentes da applicacao

    //criacao do provedor do contexto e valor
    const contextValue = 'text context'

    return (
        <SomeContext.Provider value={{ contextValue }}>
            {/*Chamamos o nosso contexto e inserimos a ele o valor passado, a tag {children} se refere
            a os componentes da aplicacao, que poderao ter acesso ao valor do contexto ou seja todo compoenente
            que estiver sendo encapsulad pelo contexto tem acesso ao valor passado na variavel contextValue
            
            para acessar o valor devemos fazer as seguintes importacoes:
            import {useContext} from 'react'
            import {SomeContext} from 'caminho do seu contexto'

            dentro do componente chamamos da seguinte forma
            const {contextValue} = useContext(SomeContext) - assim podemos utilizar o valor dentro do componente desejado
            */}
            {children}
        </SomeContext.Provider>
    )
}
