const express = require('express');
const bodyParser = require('body-parser')
const { userRegister, userLogin, userProfile } = require('../controllers/userController')

const router = express.Router();

router.post("/register", userRegister)

router.post("/login", userLogin)

router.get("/profile/:id", userProfile)

module.exports = router;