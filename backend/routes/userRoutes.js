const express = require('express');
const {authUser,getUserProfile,registerUser} = require('../controllers/userController');
const {protect} = require('../middlewares/authRoute');
const router = express.Router();

router.post('/',registerUser)
router.post('/login', authUser)
router.route('/profile').get(getUserProfile,protect)

module.exports = router;