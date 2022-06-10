import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = 'http://localhost:3000/products?' + searchParams
    const { data: items, loading, error } = useFetch(url)

    return (
        <div>
            <h1>Resultados disponiveis</h1>
            <ul className="products">
                {!items && <p>Ocorreu um erro: {error}</p>}
                {items &&
                    items.map((i) => (
                        <li key={i.id}>
                            <h1>{i.name}</h1>
                            <p>{i.price}</p>
                            <Link to={`/products/${i.id}`}>Detalhes</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Search
