const express = require('express')
const User = require('../models/userModel');
const { getMySingleCourse,  enrollCourse, getMyCourses } = require('../controllers/myCoursesController')

const router = express.Router();

router.get("/:email", getMyCourses)

router.get("/:email/:id", getMySingleCourse)

router.post("/enroll", enrollCourse)



module.exports = router;