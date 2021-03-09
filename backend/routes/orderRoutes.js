const express = require('express');
const {addOrderItems,getOrderById,updateOrderToPaid,getMyOrders, getOrders,updateOrderToDelivered} = require('../controllers/orderController');
const {protect, admin} = require('../middlewares/authRoute');
const router = express.Router();

router.route('/').post(addOrderItems,protect).get(protect,admin,getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, updateOrderToDelivered)

module.exports = router
