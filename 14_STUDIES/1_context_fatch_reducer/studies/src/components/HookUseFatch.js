import { useState, useEffect } from 'react'
import styles from './HookUseFatch.module.css'

const HookUseFatch = () => {
    const urlProdu = 'http://localhost:3000/products'
    const [products, setProducts] = useState([])

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    // 1 - get products
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(urlProdu)
            const data = await res.json()
            setProducts(data)
        }
        fetchData()
    }, [])
    //2 - add products
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newProd = {
            name,
            price,
        }
        const data = await fetch(urlProdu, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProd),
        })
        const addedProduct = await data.json()
        setProducts((totalProducts) => [...totalProducts, addedProduct])
        setPrice('')
        setName('')
    }

    const handleDelete = async (id) => {
        const deleteUrl = `${urlProdu}/${id}`
        const res = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const productsDelete = products.filter((prod) => prod.id !== id)
        setProducts(productsDelete)
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
                    <input type="submit" value="Criar Prod" />
                </form>
            </div>
            <div className="car-container">
                {products &&
                    products.map((prod) => (
                        <div className={styles.card} key={prod.id}>
                            <h2>{prod.name}</h2>
                            <h3>{prod.price}</h3>
                            <button onClick={() => handleDelete(prod.id)}>
                                Deletar
                            </button>
                        </div>
                    ))}
            </div>
            <hr />
        </div>
    )
}

export default HookUseFatch
