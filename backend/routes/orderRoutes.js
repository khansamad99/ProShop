const express = require('express');
const {addOrderItems,getOrderById,updateOrderToPaid} = require('../controllers/orderController');
const {protect} = require('../middlewares/authRoute');
const router = express.Router();

router.route('/order').post(addOrderItems,protect)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

module.exports = router
