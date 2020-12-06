const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const cn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        }) 

        console.log(`MongoDB connected :${cn.connection.host}`)
    } catch (error) {
        console.error(`Error:${error.message}`)
        process.exit(1);
    }
}

module.exports  = connectDB;