const TemplateEngine = () => {
    const name = 'Alessandro'
    const data = {
        age: 31,
        profission: 'Programmmer',
    }

    return (
        <div>
            <h1>ola {name}, tuo bem?</h1>
            <p>Voce eh {data.profission}</p>
        </div>
    )
}

export default TemplateEngine
