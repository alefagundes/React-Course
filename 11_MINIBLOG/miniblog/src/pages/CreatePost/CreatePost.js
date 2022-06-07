import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState('')
    const { insertDocument, response } = useInsertDocument('posts')
    const { user } = useAuthValue()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError('')

        // validate image
        try {
            new URL(image)
        } catch (error) {
            setFormError('A imagem precisa ser uma URL.')
        }

        // create tags array
        const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())

        // check values
        if (!title || !image || !tags || !body) {
            setFormError('Por favor, preencha todos os campos!')
        }

        console.log({
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        })

        if (formError) return

        insertDocument({
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        })

        // redirect to home page
        navigate('/')
    }

    return (
        <div className={styles.createPost}>
            <h2>Criar Post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input
                        type="text"
                        value={title}
                        placeholder="Titulo do post"
                        name="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <span>URL da Imagem:</span>
                    <input
                        type="text"
                        value={image}
                        name="image"
                        placeholder="Insira uma imagem que representa o seu post"
                        required
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label>
                    <span>Conteúdo:</span>
                    <textarea
                        name="body"
                        required
                        placeholder="Insira o conteudo do post"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                        type="text"
                        value={tags}
                        name="tags"
                        placeholder="Insira as tags separadas por vírgula"
                        required
                        onChange={(e) => setTags(e.target.value)}
                    />
                </label>
                {!response.loading && (
                    <button className="btn">Criar post!</button>
                )}
                {response.loading && (
                    <button className="btn" disabled>
                        Aguarde.. .
                    </button>
                )}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>
        </div>
    )
}

export default CreatePost
