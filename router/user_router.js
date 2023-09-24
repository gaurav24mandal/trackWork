const express = require('express');

const { createUser, userLogin, currentUser } = require('../controller/user_controller');
const { authUser } = require('../middleware/jwt_auth');
const router = express.Router();

router.post('/register', createUser);
router.post('/login',userLogin);
router.get('/currentUser',authUser,currentUser)

module.exports = router; 