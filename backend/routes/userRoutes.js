const express = require('express');
const { getUserDetails } = require('../../ui/src/actions/userActions');
const {authUser,getUserProfile,registerUser,updateUserProfile,getUsers,deleteUser} = require('../controllers/userController');
const {protect, admin} = require('../middlewares/authRoute');
const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/',registerUser)
router.post('/login', authUser)
router.route('/profile')
    .get(getUserProfile,protect)
    .put(updateUserProfile,protect)

router.route('/:id')
    .delete(protect, admin, deleteUser)

    
module.exports = router;