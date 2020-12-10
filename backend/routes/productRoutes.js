const express = require('express');
const User = require('../models/User.js');
const Product =  require('../models/Product.js');
const asyncHandler = require('express-async-handler')

const router = express.Router();

// @description
// @fetch all products
// Public route

router.get(
    '/',
    asyncHandler(async (req, res) => {
      const products = await Product.find({})
  
      res.json(products)
    })
)

// @description
// @fetch single  product
// Public route
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id)
  
      if (product) {
        res.json(product)
      } else {
        res.status(404).json({ message: 'Product not found' })
      }
    })
  )

  module.exports = router;

