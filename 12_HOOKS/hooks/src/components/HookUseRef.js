import { useState, useEffect, useRef } from 'react'

const HookUseRef = () => {
    //1 - useRef
    const numberRef = useRef(0)

    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        //
        numberRef.current++
        console.log(numberRef)
    })

    //2 - useRef e DOM

    const input = useRef()
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setText('')
        input.current.focus() //apos o envio do form permite que vc foque de novo no input, passando um novo data
    }

    return (
        <div>
            <h2>useRef</h2>
            {/* 1 - useRef */}
            <p>o componente renderizou: {numberRef.current}</p>
            <p>Counter A: {counterA}</p>
            <p>Counter B: {counterB}</p>
            <button onClick={() => setCounterA(counterA + 1)}>
                Counter A ++
            </button>
            <button onClick={() => setCounterB(counterB + 1)}>
                Counter B ++
            </button>

            {/*2 - useRef e dom */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="input"
                    ref={input}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
            <hr />
        </div>
    )
}

export default HookUseRef
