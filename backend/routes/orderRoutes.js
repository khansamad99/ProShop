const express = require('express');
const {addOrderItems,getOrderById,updateOrderToPaid,getMyOrders} = require('../controllers/orderController');
const {protect} = require('../middlewares/authRoute');
const router = express.Router();

router.route('/').post(addOrderItems,protect)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

module.exports = router
