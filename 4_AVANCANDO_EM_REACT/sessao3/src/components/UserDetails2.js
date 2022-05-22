const UserDetails2 = () => {
    const pessoas = [
        { nome: 'alessandro', age: 21, profission: 'Developper' },
        { nome: 'joao', age: 17, profission: 'Vendedor' },
        { nome: 'marcio', age: 21, profission: 'Auxiliar geral' },
    ]

    const maiores = pessoas.filter((pessoa) => pessoa.age >= 18)

    return (
        <div>
            <h1>Pessoas que podem tirar a carteira</h1>
            {maiores.map((p, i) => (
                <p key={i}>
                    nome: {p.nome}, idade: {p.age}
                </p>
            ))}
        </div>
    )
}

//solucao minha para a tarefa de numeor 4 do curso.

export default UserDetails2
