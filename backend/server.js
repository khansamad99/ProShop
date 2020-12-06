const express = require('express');
const dotenv = require('dotenv')
const products = require('./data/products');
const connect = require('./config/db');

const app = express();

connect();

dotenv.config();

app.get('/',(req,res) => {
    res.send('API is running...');
})

app.get('/api/products',(req,res) => {
    res.json(products);
})

app.get('/api/product/:id',(req,res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`));