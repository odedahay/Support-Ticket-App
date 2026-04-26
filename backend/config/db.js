const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'supportDeskDB',
        })
        console.log(`MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1)
    }
}

module.exports = connectDB;
