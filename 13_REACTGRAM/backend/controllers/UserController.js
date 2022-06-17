const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

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

//get current logged in user
const getCurrentUser = async (req, res) => {
    //pega user pela requisicao
    const user = req.user
    res.status(200).json(user)
}

const update = async (req, res) => {
    const { name, password, bio } = req.body
    let profileImage = null

    if (req.file) {
        profileImage = req.file.filename
    }

    const reqUser = req.user
    //busca o usuario salavndo o mesmo na constante user
    const user = await User.findById(
        mongoose.Types.ObjectId(reqUser._id)
    ).select('-password')

    //atualiza campo name
    if (name) {
        user.name = name
    }
    //atualiza campo password
    if (password) {
        //generate salt and hashpassword
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)
        user.password = passwordHash
    }
    //atualiza campo profileImage
    if (profileImage) {
        user.profileImage = profileImage
    }
    //atualiza campo bio
    if (bio) {
        user.bio = bio
    }

    //salva o user com os novos dados no banco
    await user.save()

    res.status(200).json(user)
}

const getUserById = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findById(mongoose.Types.ObjectId(id)).select(
            '-password'
        )

        if (!user) {
            res.status(404).json({ erros: ['Usuário não encontrado!'] })
            return
        }
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(404).json({ erros: ['Usuário não encontrado!'] })

        return
    }
}

module.exports = { register, login, getCurrentUser, update, getUserById }
