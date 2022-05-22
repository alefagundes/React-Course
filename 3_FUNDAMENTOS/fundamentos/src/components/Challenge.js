const Challenge = () => {
    let a = 5
    let b = 10

    const sum = () => {
        console.log(a + b)
    }

    return (
        <div>
            <h2>
                o valor de a = {a} e b = {b}
            </h2>
            <button onClick={() => sum}>somar valores</button>
        </div>
    )
}

export default Challenge
