const express = require('express')
const router = express()

//controllers
const {
    insertPhoto,
    removePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto,
    commentPhoto,
    searchPhoto,
} = require('../controllers/PhotoController')

//middlewares
const {
    photoInsertValidation,
    titleValidation,
    commentValidation,
} = require('../middlewares/photoValidaion')
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
router.get('/user/:id', authGuard, getUserPhotos)

router.get('/search', authGuard, searchPhoto)
router.get('/:id', getPhotoById) // this case the sort is important to routes
router.put('/:id', authGuard, titleValidation(), validate, updatePhoto)
router.put('/like/:id', authGuard, likePhoto)
router.put(
    '/comment/:id',
    authGuard,
    commentValidation(),
    validate,
    commentPhoto
)

module.exports = router
