const express = require('express')
const router = express()

//controllers
const {
    insertPhoto,
    removePhoto,
    getAllPhotos,
} = require('../controllers/PhotoController')

//middlewares
const { photoInsertValidation } = require('../middlewares/photoValidaion')
const authGuard = require('../middlewares/authGuard')
const validate = require('../middlewares/handleValidation')
const { imageUpload } = require('../middlewares/imageUpload')

//routes
router.post(
    '/',
    authGuard,
    imageUpload.single('image'),
    photoInsertValidation(),
    validate,
    insertPhoto
)
router.delete('/:id', authGuard, removePhoto)
router.get('/', authGuard, getAllPhotos)

module.exports = router
