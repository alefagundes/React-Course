import { useReducer, useState } from 'react'

const HookUseReducer = () => {
    // 1 - Explicando o reduce
    //O valor numero sera alterado pela chamada funcao pelo parametro dispach
    //(como se fosse um set do useState, so que para um conjunto de valores) o state na funcao alimenta/representa o valor
    //do numero que sera gerado aleatoriamente pela funcao random().

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state) //o valor atribuido ao numero sera impresso em tela
    })

    // 2 - avancando no useReducer
    const initialTasks = [
        { id: 1, text: 'Aprender JS' },
        { id: 2, text: 'Aprender Node.js' },
        { id: 3, text: 'Aprender React.js' },
    ]

    const changeTask = (state, action) => {
        //a funcao recebe como parametro o dado e uma acao para o mesmo
        // caso a acao recebida dor ADD se cria um novo objeto e atraves do [...Spred Operator] juntamos o novo
        //objeto ao array instaciado, o hook se recarrega e exibe o dado em tela

        //eslint-disable-next-line
        switch (action.type) {
            case 'ADD': //geracao do objeto
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                }
                setTaskText('')
                return [...state, newTask] //retorno do novo objeto, somado a lista ja informada
        }
    }

    const [taskText, setTaskText] = useState('')

    const [tasks, alteraTask] = useReducer(changeTask, initialTasks)

    //alteraTask ativara a function changeTask acrecentar o dado informado no input, tasks recebe o dado
    // e o hook recarrega apresentando o novo dado em tela

    const handleSubmit = (e) => {
        e.preventDefault() //evita o recarregamento de tela apos a submissao do formulario
        alteraTask({ type: 'ADD' }) //chama a funcao pelo passando o metodo de ADD informado na funcao
    }

    return (
        <div>
            <h2>useReducer</h2>
            <p>number: {number}</p>{' '}
            {/*Exibicao do valor para o numero em tela */}
            <button onClick={dispatch}>Alterar valor</button>
            <h3>Tarefas</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="taskText"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)} //capturando o valor a cada dentrada
                    //do teclado e setando a variavel taskTest que sera manipulada pelo useReducer
                />
                <input type="submit" value="Enviar" />
            </form>
            {tasks.map((task) => (
                //impressao da lista de tareafas
                <li key={task.id}>{task.text}</li>
            ))}
            <hr />
        </div>
    )
}

export default HookUseReducer
