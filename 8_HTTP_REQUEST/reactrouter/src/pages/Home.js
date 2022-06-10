import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Home.css'

const Home = () => {
    const url = 'http://localhost:3000/products'

    const { data: items, loading, error } = useFetch(url)

    return (
        <div>
            <h1>Products</h1>
            {error && <p>{error}</p>}
            <ul className="products">
                {items &&
                    items.map((i) => (
                        <li key={i.id}>
                            <h2>{i.name}</h2>
                            <p>RS: {i.price}</p>
                            {/*Rota dinamica */}
                            <Link to={`/products/${i.id}`}>Detalhes</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Home
