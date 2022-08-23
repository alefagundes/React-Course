export const api = 'http://localhost:5000/api'
export const upload = 'http://localhost:5000/uploads'

export const requestConfig = (method, data, token = null, image = null) => {
    let config

    if (image) {
        config = {
            method,
            body: data,
            headers: {},
        }
    } else if (method === 'DELETE' || data === null) {
        config = {
            method,
            headers: {},
        }
    } else {
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content Type': 'application/json',
            },
        }
    }

    if (token) {
        config.headers.Autorization = `Bearer ${token}`
    }
    return config
}
