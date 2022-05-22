const SecondComponent = () => {
    return (
        <form action="#" method="post">
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Nome:" />
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input type="text" name="lastname" placeholder="Sobrenome:" />
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default SecondComponent
