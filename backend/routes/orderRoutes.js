const express = require('express');
const {addOrderItems} = require('../controllers/orderController');
const {protect} = require('../middlewares/authRoute');
const router = express.Router();

router.route('/order').post(addOrderItems,protect)

module.exports = router
