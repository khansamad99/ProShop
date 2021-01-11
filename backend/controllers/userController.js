const User = require('../models/User.js');
const asyncHandler = require('express-async-handler')
const generate = require('../utils/generateToken');


exports.authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body
    
    const user = await User.find({email});

    if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generate(user._id)
        })
      } else {
        res.status(401)
        throw new Error('Invalid email or password')
      }
})


