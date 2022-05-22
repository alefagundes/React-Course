const UserDetails = ({ name, job, age }) => {
    return (
        <div>
            <h2>Nome: {name}</h2>
            <p>idade: {age}</p>
            <p>profissao: {job}</p>
            {age >= 18 ? <p>Pode retirar CNH</p> : <p>Nao pode retirar CNH</p>}
        </div>
    )
}

export default UserDetails
