
const mySecret = process.env['DB_URI']
const mongo = require('mongoose')
const { mongoPath } = require(mySecret)

module.exports = async () => {
    await mongo.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })

    return mongo
}

mongo.connection.on('connected', () => {
    console.log('sucessfully connected to mongo')
})