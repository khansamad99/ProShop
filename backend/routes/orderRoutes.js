const express = require('express');
const {addOrderItems,getOrderById} = require('../controllers/orderController');
const {protect} = require('../middlewares/authRoute');
const router = express.Router();

router.route('/order').post(addOrderItems,protect)
router.route('/:id').get(protect, getOrderById)

module.exports = router
