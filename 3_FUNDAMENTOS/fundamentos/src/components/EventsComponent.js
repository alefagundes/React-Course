const EventsComponent = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('botao clicado')
    }

    const renderSomothing = (x) => {
        if (x) {
            return <h1>Recebeu algum parametro</h1>
        } else {
            return <h1>Nao recebeu parametro</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou')}>
                    Clique tbm!
                </button>
                <button
                    onClick={() => {
                        if (true) {
                            console.log('isso n deveria existir ;)')
                        }
                    }}
                >
                    Clique aqui, pf
                </button>
            </div>
            {renderSomothing(true)}
            {renderSomothing()}
        </div>
    )
}

export default EventsComponent
