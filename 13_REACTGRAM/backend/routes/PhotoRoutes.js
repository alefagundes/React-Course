const express = require('express')
const router = express()

const { teste } = require('../controllers/PhotoController')

router.get('/teste', teste)

module.exports = router
