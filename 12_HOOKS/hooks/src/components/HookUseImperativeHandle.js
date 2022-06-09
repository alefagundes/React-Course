import { useRef, useState } from 'react'
import SomeComponent from './SomeComponent'

const HookUseImperativeHandle = () => {
    const componentRef = useRef() //crio uma referencia para algo e preciso referenciar alguem
    return (
        <div>
            <h2>HookUseImperativeHandle</h2>
            <SomeComponent ref={componentRef} />{' '}
            {/*referencio o meu component passando a variavel de referencia */}
            <button onClick={() => componentRef.current.validate()}>
                Validate
            </button>
            <hr />
        </div>
    )
}

export default HookUseImperativeHandle
