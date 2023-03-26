const courses = require("../data/data")
const bodyParser = require('body-parser')
const User = require('../models/userModel')
const mongoose = require('mongoose')
let list

const enrollCourse = (req,res) => {
    const courseId = req.body.cid
    const userEmail = req.body.email
    User.findOneAndUpdate({email : userEmail}, { $push: { courses: courseId }}, {new : true})
    .then(
        (docs) => {
            const courses = docs.courses 
            
            res.status(200).send({
                message : "Course Added Successfully",
                courses  
            })
        }
    ).catch(
        err => {
            console.log(err)
            res.status(200).send({
                message : "Error Occurred",
                err
            })
        }
    )
}

const getMySingleCourse = (req,res) => {
    const courseId = req.params.id;
    const userEmail = req.params.email;
    User.findOne({email: userEmail}).then(
        user => {
            if(!user) {
                res.status(404).send({
                    message : "User not found"
                })
            }

            const myCourseList = courses.filter((c) => user.courses.includes(c._id));
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
    ).catch((err) => {
        res.status(404).send({
          message: "Error Occurred",
          err,
        });
        console.log(err);
      }
    )
}

const getMyCourses = (req,res) => {
    const email = req.params.email
    User.findOne({email : email}).then(
        user => {
            list = user.courses;
            const myCourseList = courses.filter((c) => {
                if(list.includes(c._id)) {
                    return c
                }
            })
            res.status(200).send({
                message : "Courses Found",
                myCourseList
            })
        }
    ).catch(
        err => {
            res.status(404).send({
               message : "Error Occurred",
                err
            })
            console.log(err)
        }
    )
}

module.exports = {
    enrollCourse,
    getMySingleCourse,
    getMyCourses,
}