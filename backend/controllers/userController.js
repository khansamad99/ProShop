const User = require('../models/User.js');
const asyncHandler = require('express-async-handler')
const generate = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
exports.authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body
    
    const user = await User.find({email});

    const isMatch = await bcrypt.compare(password, user.password);

    if (user ) {
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


// @desc    Get User Profile
// @route   POST /api/users/profile
// @access  Private
exports.getUserProfile = asyncHandler(async(req,res) => {
  const user = await User.findById(req.user._id)

  if (user ) {
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


