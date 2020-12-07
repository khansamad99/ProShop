const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
const connectDB = async () => {
    try {
        const cn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        }) 

        console.log(`MongoDB connected :${cn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error:${error.message}`.red.underline.bold)
        process.exit(1);
    }
}

module.exports  = connectDB;