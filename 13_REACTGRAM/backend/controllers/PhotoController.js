const Photo = require('../models/Photo')
const mongoose = require('mongoose')
const User = require('../models/User')

//insertion a photo, with an user related to it
const insertPhoto = async (req, res) => {
    const { title } = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    //create photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
    })

    //if photo was created sucessfully, return data
    if (!newPhoto) {
        res.status(422).json({
            errors: [
                'Houve um problema, por favor tente novamente mais tarde.',
            ],
        })
        return
    }

    res.status(201).json(newPhoto)
}

//remove photo db

const removePhoto = async (req, res) => {
    const { id } = req.params

    const reqUser = req.user

    try {
        const photo = await Photo.findById(mongoose.Types.ObjectId(id))

        //check if photo exists
        if (!photo) {
            res.status(404).json({ errors: ['Foto nao encontrada!'] })
            return
        }
        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({
                errors: ['Ocorreu um erro tente novamente mais tarde!'],
            })
            return
        }
        await Photo.findByIdAndRemove(photo._id)

        res.status(200).json({
            id: photo._id,
            message: 'Foto excluida com sucesso!',
        })
    } catch (error) {
        res.status(404).json({ errors: ['Foto nao encontrada!'] })
        return
    }
}

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({})
            .sort([['createdAt', -1]])
            .exec()

        return res.status(200).json(photos)
    } catch (error) {
        res.status(404).json({
            errors: [
                'Houve um erro, por gentileza tente novamente mais tarde!',
            ],
        })
        return
    }
}

const getUserPhotos = async (req, res) => {
    const { id } = req.params

    const photos = await Photo.find({ userId: id })
        .sort([['createdAt', -1]])
        .exec()
    if (!photos) {
        res.status(422).json({ errors: ['Este usuário não possui photos!'] })
        return
    }

    res.status(200).json(photos)
}

//get photo by id
const getPhotoById = async (req, res) => {
    const { id } = req.params

    const photo = await Photo.findById(mongoose.Types.ObjectId(id))

    if (!photo) {
        res.status(404).json({ errors: ['Foto não encontrada!'] })
        return
    }

    res.status(200).json(photo)
}
//update photo
const updatePhoto = async (req, res) => {
    const { id } = req.params
    const { title } = req.body

    const reqUser = req.user
    const photo = await Photo.findById(id)

    //check photo exists
    if (!photo) {
        res.status(404).json({ errors: ['Foto não encontrada!'] })
        return
    }
    //check if user exists
    if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({
            errors: ['Houve um problema, tente novamente mais tarde!'],
        })
        return
    }

    if (title) {
        photo.title = title
    }

    await photo.save()
    res.status(200).json({ photo, message: 'Photo atualizada com sucesso!' })
}

//like in photo
const likePhoto = async (req, res) => {
    const { id } = req.params

    const reqUser = req.user
    const photo = await Photo.findById(id)

    if (!photo) {
        res.status(404).json({
            errors: ['Houve um problema, por favor tente mais tarde!'],
        })
        return
    }
    if (photo.likes.includes(reqUser._id)) {
        res.status(422).json({
            errors: ['Você já curtiu esta foto!'],
        })
        return
    }

    //put user id in array likes
    photo.likes.push(reqUser._id)
    photo.save()

    res.status(200).json({
        photoId: id,
        userId: reqUser._id,
        message: 'A foto foi curtida!',
    })
}

const commentPhoto = async (req, res) => {
    const { id } = req.params
    const { comment } = req.body

    const reqUser = req.user

    const user = await User.findById(reqUser._id)
    const photo = await Photo.findById(id)

    if (!photo) {
        res.status(404).json({
            erros: ['Houve um erro, por gentileza tente mais tarde!'],
        })
        return
    }
    const userComment = {
        comment,
        userName: user.name,
        userImage: user.profileImage,
        userId: user._id,
    }

    photo.comments.push(userComment)

    await photo.save()

    res.status(200).json({
        comment: userComment,
        message: 'O comentário foi adicionado com sucesso!',
    })
}

const searchPhoto = async (req, res) => {
    const { q } = req.query

    const photos = await Photo.find({ title: new RegExp(q, 'i') }).exec()

    if (!photos) {
        res.status(422).json({
            errors: ['Não há photos com title mencionado!'],
        })
        return
    }

    res.status(200).json(photos)
}

module.exports = {
    insertPhoto,
    removePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto,
    commentPhoto,
    searchPhoto,
}
