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

    console.log(user[0].password)
    const isMatch = await bcrypt.compare(password, toString(user.password));

    if (user ) {
        res.json({
          _id: user[0]._id,
          name: user[0].name,
          email: user[0].email,
          isAdmin: user[0].isAdmin,
          token: generate(user[0]._id)
        })
      } else {
        res.status(401)
        throw new Error('Invalid email or password')
      }
})


// @desc    Register user
// @route   POST /api/users/register
// @access  Public
exports.registerUser = asyncHandler(async(req,res) => {
  const {name,email,password} = req.body
  
  const userExist = await User.findOne({email});
  
  if(userExist){
    res.status(400)
    throw new Error('User already Exist')
  }

  const user = new User({
    name,
    email,
    password
  })

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(password, salt);
  await user.save()

  if (user ) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generate(user._id)
      })
    } else {
      res.status(400)
      throw new Error('Invalid data')
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


