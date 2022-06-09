import { useLayoutEffect, useEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState('algum nome')

    useEffect(() => {
        console.log('2')
        setName('mudou de novo')
    }, [])

    useLayoutEffect(() => {
        //basicamente a mesma funccionalidade do useEffect, mas o useLayoutEffect prioriza sua
        // execucao e funcoes sendo o primeiro a prevalecer... ou seja se antes de mostrar a sua applicacao vc deseja exebir
        //um anuncio ou popup esse eh o hook a ser utilizado.
        console.log('1')
        setName('outro nome')
    }, [])

    console.log(name)

    return (
        <div>
            <h2>useLayoutEffect</h2>
            <p>Nome: {name}</p>
            <hr />
        </div>
    )
}
export default HookUseLayoutEffect
