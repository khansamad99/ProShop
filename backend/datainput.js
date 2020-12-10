const mongoose = require('mongoose');
const dotenv = require('dotenv');
const products = require('./data/products');
const users = require('./data/users');
const connectDB = require('./config/db');
const colors = require('colors');
const User = require('./models/User.js');
const Product =  require('./models/Product.js');
const Order =  require('./models/Order.js');


dotenv.config();

connectDB();

const importData = async () => {
    try {
        

        const createUsers = await User.insertMany(users);

        const adminUser = createUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return {...product,user:adminUser}
        })

        await Product.insertMany(sampleProducts);
        console.log('Data imported'.green.inverse);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()
  
      console.log('Data Destroyed!'.red.inverse)
      process.exit()
    } catch (error) {
      console.error(`${error}`.red.inverse)
      process.exit(1)
    }
  }
  
  if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }