import { useState } from 'react'
//import { useEffect } from 'react'
import styles from './HookUseFatch.module.css'

// 4 - custom hook
import { useFetch } from '../hooks/useFetch'

const HookUseFatch = () => {
    const urlProdu = 'http://localhost:3000/products'
    //const [products, setProducts] = useState([])

    // 4 - custom hook
    const { data: items, httpConfig, loading, error } = useFetch(urlProdu)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    // 1 - get products
    /* useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(urlProdu)
            const data = await res.json()
            setProducts(data)
        }
        fetchData()
    }, []) */
    //2 - add products
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newProd = {
            name,
            price,
        }
        /* const data = await fetch(urlProdu, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProd),
        })
        const addedProduct = await data.json()
        setProducts((totalProducts) => [...totalProducts, addedProduct]) */
        // refatorando post
        httpConfig(newProd, 'POST') //envocando metodo do hook
        setPrice('')
        setName('')
    }

    const handleDelete = (id) => {
        /* const deleteUrl = `${urlProdu}/${id}`
        const res = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const productsPosDelete = products.filter((prod) => prod.id !== id)
        setProducts(productsPosDelete) */
        httpConfig(id, 'DELETE')
    }

    return (
        <div>
            <h2>useFatch</h2>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Preço:
                        <input
                            type="text"
                            name={price}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    {loading ? (
                        <input type="submit" value="Aguarde" disabled />
                    ) : (
                        <input type="submit" value="Criar Prod" />
                    )}
                </form>
            </div>
            {/*Exibicao de informacao coonforme o loading */}
            {loading && <p>Carregando dados...</p>}
            {error ? (
                <p>{error}</p>
            ) : (
                <div className="car-container">
                    {items &&
                        items.map((prod) => (
                            <div className={styles.card} key={prod.id}>
                                <h2>{prod.name}</h2>
                                <h3>{prod.price}</h3>
                                <button onClick={() => handleDelete(prod.id)}>
                                    Deletar
                                </button>
                            </div>
                        ))}
                </div>
            )}

            <hr />
        </div>
    )
}

export default HookUseFatch
