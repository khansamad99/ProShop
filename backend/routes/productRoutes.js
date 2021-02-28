const express = require('express');
const {getProductById,getProducts,deleteProduct} = require('../controllers/productController');
const router = express.Router();


router.route('/').get(getProducts)
router.route('/:id').get(getProductById);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  

module.exports = router;

