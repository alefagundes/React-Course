import { useState, useEffect } from 'react'

//4- custom hooks

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5- refatoring post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    // 6 - loading
    const [loading, setLoading] = useState(false)

    //7 - tratando error
    const [error, setError] = useState(null)

    // 8 - desafio 6
    const [id, setId] = useState(null)

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            setMethod(method)
        } else if (method === 'DELETE') {
            setConfig({
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            setMethod(method)
            setId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            // 6 loading
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            } catch (error) {
                console.log(error.message)
                setError('houve um erro')
            }
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])

    //5 - refatoring post
    useEffect(() => {
        const httpRequest = async () => {
            let json
            if (method === 'POST') {
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                json = await res.json()
            } else if (method === 'DELETE') {
                const deleteUrl = `${url}/${id}`
                const res = await fetch(deleteUrl, config)
                json = await res.json()
            }
            setCallFetch(json)
        }
        httpRequest()
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}
