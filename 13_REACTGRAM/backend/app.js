require('dotenv').config()

//frame to develop backend
const express = require('express')
//module to save project images
const path = require('path')

const cors = require('cors')

const app = express()

//define port parameter by .env file
const port = process.env.PORT

//transfor data to format and request json
app.use(express.json())

//can use data send body
app.use(
    express.urlencoded({
        extended: false,
    })
)

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

//public folder for images
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//DB connection
require('./config/db')

//import routes
const router = require('./routes/Routes')
app.use(router)

//port api
app.listen(port, () => {
    console.log('App rodando na posta:', port)
})
