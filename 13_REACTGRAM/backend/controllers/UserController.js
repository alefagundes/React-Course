const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const jwtsecret = process.env.JWT_SECRET

//generate user token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtsecret, { expiresIn: '7d' })
}

const register = async (req, res) => {
    const { name, email, password } = req.body

    //check if user exists
    const user = await User.findOne({ email })
    if (user) {
        res.status(422).json({ errors: ['Por favor, utilize outro e-mail!'] })
        return
    }
    //Generated hashPassword
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    //crete user
    const newUser = await User.create({
        name,
        email,
        password: passwordHash,
        //banco contem o nome do campo password, atribuo o valor do passwordhash
    })
    //if user was create sucessfully, return token
    if (!newUser) {
        res.status(422).josn({
            errors: ['Houve um erro, por favor tente mais tarde.'],
        })
        return
    }
    res.status(200).json({
        _id: newUser.id,
        token: generateToken(newUser.id),
    })
}

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    //check if user exists
    if (!user) {
        res.status(422).json({ error: 'E-mail ou Senha incorretos!' })
        return
    }
    //check if passwords matches
    const passwordsMatch = await bcrypt.compare(password, user.password)

    if (!passwordsMatch) {
        res.status(422).json({ errors: ['E-mail ou Senha incorretos!'] })
        return
    }
    //return user with token
    res.status(200).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id),
    })
}

//get currentlogged in user
const getCurrentUser = async (req, res) => {
    //pega user pela requisicao
    const user = req.user
    res.status(200).json(user)
}

module.exports = { register, login, getCurrentUser }
