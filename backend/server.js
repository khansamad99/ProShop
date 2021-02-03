const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');
const connect = require('./config/db');
const colors = require('colors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const app = express();

connect();

dotenv.config();

app.get('/',(req,res) => {
    res.send('API is running...');
})

app.use(express.json())
app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes);
app.use('/api/order',orderRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold));