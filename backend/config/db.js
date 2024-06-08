const mongoose = require('mongoose')


const connectDB = async () => {
    await mongoose.connect('mongodb+srv://imrankh8602:webarebears@cluster0.ylkjbyj.mongodb.net/food').then(()=>{
        console.log('MongoDB is connected');
    })
}

module.exports = { connectDB }