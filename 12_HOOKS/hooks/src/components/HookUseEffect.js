import { useState, useEffect } from 'react'

const HookUseEffect = () => {
    //1- useEffect sem dependencias

    useEffect(() => {
        /* O mesmo eh utiilizado pelo menos uma vez no codigo,
        ele trabalha de modo a monitorar uma variavel ou mais [array de dependencias]
        quando essa variavel sofre alteracao o hook e as funcoes presentes no mesmo sao reexecutadas*/
        console.log('estou sendo executado apenas uma vez')
    }, []) //sem dependencia ira executar apenas uma vez

    const [number, setNumber] = useState(0)

    // 2 - useEffect com dependencia, no caso monitora o valor de number, toda vez que o mesmo sofre aleracao
    //a msg (valor do number eh: ${number}) eh disparada no console com o valor da variavel number no estado atual
    useEffect(() => {
        if (number > 0) {
            console.log(`valor do number eh: ${number}`)
        }
    }, [number])

    return (
        <div>
            <h1>effect</h1>
            {/*o incremento do valor de number eh dado pelo setNumber do useState que eh o hook de
             'alimentacao' dos dados  */}
            <h1>Click no botao para incrementar o numero:{number}</h1>
            <button onClick={() => setNumber(number + 1)}>incrementar</button>
            <hr />
        </div>
    )
}

export default HookUseEffect
