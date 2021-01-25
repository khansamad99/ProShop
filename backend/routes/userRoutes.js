const express = require('express');
const {authUser,getUserProfile,registerUser,updateProfile} = require('../controllers/userController');
const {protect} = require('../middlewares/authRoute');
const router = express.Router();

router.post('/',registerUser)
router.post('/login', authUser)
router.route('/profile')
    .get(getUserProfile,protect)
    .put(updateUserProfile,protect)
module.exports = router;