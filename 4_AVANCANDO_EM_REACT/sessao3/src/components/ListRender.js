import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['alessandro', 'Davi', 'josias'])

    const [users, setUsers] = useState([
        { id: 1, name: 'joao', age: 20 },
        { id: 2, name: 'pedro', age: 31 },
        { id: 3, name: 'maria', age: 28 },
    ])

    const deleteRandom = () => {
        const roadomNumber = Math.floor(Math.random() * 4)
        console.log(roadomNumber)

        setUsers((prevUser) => {
            console.log(prevUser)
            return prevUser.filter((users) => roadomNumber !== users.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete roandou user</button>
        </div>
    )
}

export default ListRender
