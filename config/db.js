const mongoose = require('mongoose')

const env = require('dotenv');
env.config();

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB