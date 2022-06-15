const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.fw5mcfz.mongodb.net/?retryWrites=true&w=majority`
        )
        console.log('Conectado com sucesso')
        return dbConn
    } catch (err) {
        console.log(err)
    }
}

conn()

module.exports = conn
