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

module.exports = {
    insertPhoto,
    removePhoto,
    getAllPhotos,
}
