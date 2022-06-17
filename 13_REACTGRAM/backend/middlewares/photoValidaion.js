const { body } = require('express-validator')

const photoInsertValidation = () => {
    return [
        body('title')
            .not()
            .equals('undefined')
            .withMessage('O titulo é obrigatório!')
            .isString()
            .withMessage('Por gentileza, informe um titulo!')
            .isLength({ min: 3 })
            .withMessage('O título precisar ter no mínimo 3 caracteres!'),
        body('image').custom((value, { req }) => {
            if (!req.file) {
                throw new Error('A imagem é obrigatória!')
            }
            return true
        }),
    ]
}

module.exports = { photoInsertValidation }
