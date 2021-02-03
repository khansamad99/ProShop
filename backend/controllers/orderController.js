const Order = require('../models/order')
const asyncHandler = require('express-async-handler')

// @desc Create Order
// @route POST /api/orders
// @access Private

exports.addOrderItems = asyncHandler(async(req,res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if(orderItems and orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return
    }
    else{
        const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
    }

})