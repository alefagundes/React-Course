import { useState, useEffect } from 'react'

// Custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // Refatorando Post
    const [config, setConfig] = useState(null) //sera utilizado para configurar o metodo e cabecalhos
    const [method, setMethod] = useState(null) //sera informado qual metodo sera utilizado na requisicao
    const [callFetch, setCallFetch] = useState(false) //sera utilizado para quando o mesmo sofrer alteracao
    //sera chamado o metodo fetch() para trazer os dados.

    //tecnica para carregamento de dados - impressao de <p> em tela dando feed back ao usuario ate a
    //conslusao do carregamento dos dados
    const [loading, setLoading] = useState(false)

    //exibicao de erro, caso ocorra
    const [error, setError] = useState(null)

    //object id to delete
    const [id, setId] = useState(null)

    const httpConfig = (data, method) => {
        //definicao dos metodos para inclusao e delete de dados
        if (method === 'POST') {
            setConfig({
                method, //mantido o metodo de post
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            setMethod(method)
        } else if (method === 'DELETE') {
            //definicao da estrutura para delecao
            setConfig({
                method, //mantido o methodo padrao de delete
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            setMethod(method)
            setId(data) //utilizamos a ideia que id recebido do front referente ao meu data.id
            //sera setado ao id declarado ao qual posteriormente sera montado a query de delecao
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url) //realizamos a requisicao na url da aplicacao
                const json = await res.json() //transformamos os dados da requisicao em objeto JS
                //seta o retorno da requisicao na variavel data e quando exportamos data temos acesso
                //ao array de objetos caso desejamos exibilos ou executar alguma tarefa.
                setData(json)
            } catch (error) {
                console.log(error.message)
                setError('Houve algum erro ao carregar os dados!')
            }
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch]) //monitora a url, caso a mesma mude, o hook faz uma requisicao e garante o retorno dos dados
    //utilizado para troca de paginas, garantindo sempre a visualizacao de dados conforme a URL.

    //fatorando post
    useEffect(() => {
        const httpRequest = async () => {
            let json
            if (method === 'POST') {
                let fetchOptios = [url, config]
                const res = await fetch(...fetchOptios)
                json = await res.json()
            } else if (method === 'DELETE') {
                let deleteUrl = `${url}/${id}` //montamos a URL referente ao produto para delecao
                const res = await fetch(deleteUrl, config)
                json = await res.json()
            }
            setCallFetch(json) //se ha dados no json o mesmo troca para true que envoca o metodo
            //de buscar dados e atualiza a lista em tela
        }
        httpRequest()
    }, [config, method, url, id]) //monitorar as configuracoes caso mude.

    //exportamos as variaveis e funcoes as quais serao utilizadas aos componentes!
    return { data, httpConfig, loading, error }
}
