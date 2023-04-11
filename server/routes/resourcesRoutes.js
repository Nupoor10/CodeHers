const express = require('express')
const router = express.Router()
const { getAllResources } = require('../controllers/resourcesController')

router.get("/", getAllResources)

module.exports = router