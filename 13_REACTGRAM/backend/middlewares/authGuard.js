const User = require('../models/User')
const jwt = require('jsonwebtoken')
const jwtsecret = process.env.JWT_SECRET

const authGuard = async (req, res, next) => {
    //verifica se possuei authorization - se sim possue um token
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] //token eh splitado na segunda parte do mesmo

    //EX: Bearer (782618621786) - sera pego a parte 2.
    //check if header has a token
    if (!token) return res.status(401).json({ errors: ['Acesso negado!'] })

    //check if token is valid
    try {
        const verified = jwt.verify(token, jwtsecret)
        req.user = await User.findById(verified.id).select('-password')
        //vai buscar na requisicao comparar o id da querisicao se existe um id no banco - a senha e retornar
        next()
    } catch (error) {
        res.status(401).json({ errors: ['Token invalido!'] })
    }
}

module.exports = authGuard
