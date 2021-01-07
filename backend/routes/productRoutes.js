const express = require('express');
import {getProducts,getProductById} from '../controllers/productController';
const router = express.Router();


router.route('/').get(getProducts)
router.route('/:id').get(getProductById);

module.exports = router;

