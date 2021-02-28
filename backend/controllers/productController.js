const express = require('express');
const User = require('../models/User.js');
const Product =  require('../models/Product.js');
const asyncHandler = require('express-async-handler')

const router = express.Router();

// @description
// @fetch all products
// Public route
exports.getProducts = asyncHandler(async(req,res) => {
      const products = await Product.find({})
  
      res.json(products)
})

// @description
// @fetch single  product
// Public route
exports.getProductById = asyncHandler(async(req,res) => {
  const product = await Product.findById(req.params.id)
  
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})