const courses = require("../data/data")
const bodyParser = require('body-parser')
const User = require('../models/userModel')
const mongoose = require('mongoose')
// let list

const enrollCourse = async (req,res) => {
    try {
        const courseId = req.body.cid
        const userEmail = req.body.email
        const response = await User.findOneAndUpdate({email : userEmail}, { $push: { courses: courseId }}, {new : true})
        const courses = await response.courses
        if(courses) {
            res.status(200).send({
                message : "Course Added Successfully",
                courses  
            })
        }
    }
    catch(error) {
        res.status(500).send({
            message : "Course Enrollment Unsuccessful",
            error : error.message
        })
    }
}

const getMySingleCourse = async (req,res) => {
    try {
        const courseId = req.params.id;
        const userEmail = req.params.email;
        const user = await User.findOne({email: userEmail})
        if(!user) {
            res.status(404).send({
                message : "User not found"
            })
        } 

        const userCourses = await user.courses
        const myCourseList = courses.filter((c) => userCourses.includes(c._id));
        const course = myCourseList.find((n) => n._id == courseId); 
        
        if(!course) {
            res.status(404).send({
                message : "Your Course was not found",
            })
        }
    
        else {
            res.status(200).send({
                message : "Your Course found successfully",
                course
            })
        }
    }
    catch(error) {
        res.status(500).send({
            message : "Single Course Fetching Unsuccessful",
            error : error.message
        })
    }
}

const getMyCourses = async (req,res) => {
    try {
        const email = req.params.email
        const user = await User.findOne({email : email})
        if(!user) {
            res.status(404).send({
                message : "User not found"
            })
        }

        const userCourses = await user.courses
        const myCourseList = courses.filter((c) => {
            if(userCourses.includes(c._id)) {
                return c
            }
        })
        res.status(200).send({
            message : "Courses Found",
            myCourseList
        })
    }
    catch(error) {
        res.status(500).send({
            message : "Courses Fetching Unsuccessful",
            error : error.message
        })
    }
}

module.exports = {
    enrollCourse,
    getMySingleCourse,
    getMyCourses,
}