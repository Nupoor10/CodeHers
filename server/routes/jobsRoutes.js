const express = require('express')
const router = express.Router()
const { getAllJobs } = require('../controllers/jobsController')

router.get("/", getAllJobs)

module.exports = router