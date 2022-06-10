const { validationResult } = require('express-validator')
//importamos o mudulo de validacao dos campos que receberemos no body

const validate = (req, res, next) => {
    //passamos uma funcao com a requisicao, resposta e o parametro next()
    //para seguir no sistema se atender as condicoes
    const errors = validationResult(req)
    //criamos uma variavel para receber o resultado da validacao na requisicao

    if (errors.isEmpty()) {
        return next()
    }
    //se essa variavel for vazia ele segue no sistema

    const extractedErrors = []
    //caso nao seja eh estanciado um array que recebera os erros filtrados

    errors.array().map((err) => extractedErrors.push(err.msg))
    //mapeamos a veriavel estanciada e cada msg de erro inserimos no array declarado

    return res.status(422).json({
        errors: extractedErrors,
    })
    //retornamos o erro gerado na validacao dos campos aguradas pela API
}

module.exports = validate
