const { body } = require('express-validator')

const userCreateValidation = () => {
    return [
        body('name')
            .isString()
            .withMessage('O nome é obrigatório!')
            .isLength({ min: 3 })
            .withMessage('O nome precisa ter no mínimo 3 caracteres.'),
        body('email')
            .isString()
            .withMessage('O e-mail é obrigatório.')
            .isEmail()
            .withMessage('Insira um e-mail valido.'),
        body('password')
            .isEmpty()
            .withMessage('Por gentileza, informe uma senha')
            .isAlphanumeric()
            .withMessage('A senha precisa conter numeros e letras'),
    ]
}

module.exports = {
    userCreateValidation,
}
