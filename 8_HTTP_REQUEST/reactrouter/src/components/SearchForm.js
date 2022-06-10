import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        console.log(query)
        e.preventDefault()
        navigate('/search?q=' + query)
    }
    console.log(query)

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Buscar:
                <input
                    type="text"
                    name="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </label>
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default SearchForm
