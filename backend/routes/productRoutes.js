const express = require('express');
const {getProductById,getProducts,deleteProduct, updateProduct, createProduct,createProductReview} = require('../controllers/productController');
const router = express.Router();


router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.route('/:id').get(getProductById);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
  

module.exports = router;

