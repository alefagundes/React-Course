import { useState, useReducer } from 'react'

const HookUseReducerTeste = () => {
    const arrTask = [
        { id: 1, task: 'aprender js' },
        { id: 2, task: 'aprender node.js' },
        { id: 3, task: 'aprender react.js' },
    ]

    const changeTask = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case 'ADD':
                const newTaks = {
                    id: Math.random(),
                    task: task,
                }
                return [...state, newTaks]
            case 'DELETE':
                return state.filter((task) => task.id !== action.id)
            default:
                return state
        }
    }

    const [task, setTask] = useState('')
    const [tasksNew, despatch] = useReducer(changeTask, arrTask)

    const handleSubmit = (e) => {
        e.preventDefault()
        despatch({ type: 'ADD' })
    }
    const removeTask = (id) => {
        despatch({ type: 'DELETE', id: id })
    }

    return (
        <div>
            <h1>HookTeste</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                />
                <input type="submit" value="Enviar" />
            </form>
            {tasksNew.map((task) => (
                <li key={task.id}>
                    {task.task}{' '}
                    <button onClick={() => removeTask(task.id)}>excluir</button>
                </li>
            ))}
        </div>
    )
}

export default HookUseReducerTeste
