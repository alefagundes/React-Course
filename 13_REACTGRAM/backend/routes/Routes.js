const express = require('express')
const router = express()

router.use('/api/users', require('./UserRoutes'))
router.use('/api/photo', require('./PhotoRoutes'))

//teste route
router.get('/', (req, res) => {
    res.send('OI json')
})

module.exports = router
