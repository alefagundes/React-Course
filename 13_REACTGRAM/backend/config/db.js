const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rsxrbu8.mongodb.net/?retryWrites=true&w=majority`
        )
        console.log('conectado com sucesso')
        return dbConn
    } catch (err) {
        console.log(err)
    }
}

module.exports = conn
