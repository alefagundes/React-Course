import './App.css'

import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {
    const [products, setProducts] = useState([])
    //4- custom hook
    const { data: items, httpConfig, loading, error } = useFetch(url)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    // 1- resgatando dados
    /* 
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
        }
        fetchData()
    }, [])
 */
    //2 - add products

    const handleSubmit = async (e) => {
        e.preventDefault()
        const product = {
            name,
            price,
        }
        /*  const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })

        //3 - dinamic charge
        const addedProduct = await res.json()

        setProducts((prevProduct) => [...prevProduct, addedProduct]) */
        // 5 - refatorando post
        httpConfig(product, 'POST')

        setName('')
        setPrice('')
    }
    // 8 - handleRemove desafio 6
    const handleRemove = (id) => {
        httpConfig(id, 'DELETE')
    }

    return (
        <div className="App">
            <h1>Lista de Produtos</h1>
            {/*^- loading */}
            {loading && <p>Carregando dados...</p>}
            {error && <p>{error}</p>}
            {!error && (
                <ul>
                    {items &&
                        items.map((p) => (
                            <li key={p.id}>
                                {p.name} - RS: {p.price}
                                <button onClick={() => handleRemove(p.id)}>
                                    Excluir
                                </button>
                            </li>
                        ))}
                </ul>
            )}
            <div className="add-product">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input
                            type="text"
                            value={name}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            value={price}
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    {/*7 - state de loading no post */}
                    {loading && (
                        <input type="submit" disabled="true" value="Aguarde" />
                    )}
                    {!loading && <input type="submit" value="Criar" />}
                </form>
            </div>
        </div>
    )
}

export default App
