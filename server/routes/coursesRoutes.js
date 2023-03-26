const express = require('express')
const router = express.Router();
const { getAllCourses, getPopularCourses, getCategories, getSingleCategory, getSingleCourse} = require('../controllers/coursesController')

router.get("/", getAllCourses)

router.get("/popular", getPopularCourses)

router.get("/category", getCategories)

router.get("/category/:id", getSingleCategory)

router.get("/:id", getSingleCourse)

module.exports = router;