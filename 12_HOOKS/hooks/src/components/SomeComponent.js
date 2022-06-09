import { forwardRef, useRef, useImperativeHandle } from 'react'

const SomeComponent = forwardRef((props, ref) => {
    //forwardRef metodo utilizado para referenciar components
    const localInputRef = useRef()
    //
    useImperativeHandle(ref, () => {
        //useImperativeHandle - me possibilita expor funcoes para que possam ser acessadas
        //pelo componente pai
        return {
            validate: () => {
                //mostrei o validate para que o mesmo possa ser utilizado pelo componente pai
                if (localInputRef.current.value.length > 3) {
                    localInputRef.current.value = ''
                }
            },
        }
    })

    return (
        <div>
            <p>insira no maximo 3 caracteres</p>
            <input type="text" ref={localInputRef} />
        </div>
    )
})

export default SomeComponent
