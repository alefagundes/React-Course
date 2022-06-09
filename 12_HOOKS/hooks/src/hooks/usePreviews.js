//custom hook - salvando o estado antigo de um valor

import { useEffect, useRef, useDebugValue } from 'react'

export const usePreviews = (value) => {
    const ref = useRef() //define uma variavel que sera referenciada com um valor

    //useDebugValue - trabalha junto com o react dev tools, o mesmo serve para gerenciar o valor de variaveis
    //pela ferramenta.

    useDebugValue('---- CUSTOM HOOKS e USEDEBUGVALUE -----')
    useDebugValue('O numero de ref eh: ' + ref)

    useEffect(() => {
        ref.current = value //passo a variavel o valor recebido na funcao e retorno o mesmo
        //esse custom hook server para salvar valores aneriores do state no componente que o mesmo eh importado
    })
    return ref.current
}
