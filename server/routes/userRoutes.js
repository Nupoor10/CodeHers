const express = require('express');
const bodyParser = require('body-parser')
const { userRegister, userLogin } = require('../controllers/userController')

const router = express.Router();

router.post("/register", userRegister)

router.post("/login", userLogin)

module.exports = router;