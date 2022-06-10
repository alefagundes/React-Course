const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const jwtsecret = process.env.JWT_SECRET

//generate user token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtsecret, { expiresIn: '7d' })
}
const register = (req, res) => {
    res.status(200).json({ message: 'Registro' })
}

module.exports = { register }
