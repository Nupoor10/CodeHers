const express = require('express')
const router = express.Router()
const { getAllEvents } = require('../controllers/eventsController')

router.get("/", getAllEvents)

module.exports = router