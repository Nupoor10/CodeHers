const courses = require("../data/data")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require("../models/userModel")

const getAllCourses = (req,res) => {
    res.status(200).send({
        message : "Courses found successfully",
        courses
    })
}

const getPopularCourses = (req,res) => {
    const popularCourses = courses.filter((c) => {
        return c.isPopular == true
    })

    if(popularCourses.length > 0) {
        res.status(200).send({
            message : "Popular Courses Found",
            popularCourses
        })
    }
    else {
        res.status(404).send({
            message : "No Popular Courses Found",
        })
    }

}

const getCategories = (req,res) => {
    const categoriesList= []
    function containsCategory(obj, list) {
        var i 
        for (i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }
        return false;
    }
    for ( i = 0 ; i < courses.length; i++) {
        const category = courses[i].category
        const bool = containsCategory(category, categoriesList)
        if (bool) {
            continue
        }
        else {
            categoriesList.push(category)
        }
    }

    if(categoriesList.length > 0) {
        res.status(200).send({
            message : "Sucessfully fetched categories",
            categoriesList
        })
    }
    else {
        res.status(404).send({
            message : "Error in fetching categories"
        })
    }
}

const getSingleCategory = (req,res) => {
    const singleCategory = courses.filter((c) => {
        return c.category.id === req.params.id
    })

    if(singleCategory.length > 0) {
        res.status(200).send({
            message : "Category Courses found successfully",
            singleCategory
        })
    }
    else {
        res.status(404).send({
            message : "No courses found"
        })
    }
}

const getSingleCourse = (req,res) => {
    const course = courses.find((n) => {
        return n._id == req.params.id;
    })

    if(!course) {
        res.status(404).send({
            message : "Course was not found",
        })
    }

    else {
        res.status(200).send({
            message : "Course found successfully",
            course
        })
    }
}

module.exports = {
    getAllCourses,
    getPopularCourses,
    getCategories,
    getSingleCategory,
    getSingleCourse
}