const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const generateToken = require('../utilities/generateToken')

//User Registration
const userRegister = async (req,res) => {
    try {
        const { name, email, password, bio, links, about, courses} = req.body

        const existingUser = await User.findOne({email : email})

        const hashedPassword = await bcrypt.hash(password, 10)

        if(existingUser) {
            res.status(404).send({
                message : "User Already Exists"
            })
        }

        const user =  await new User(
            {
                name : name,
                email : email,
                password : hashedPassword,
                bio : bio,
                links : links,
                about : about,
                courses : courses
            }
        )
    
        await user.save()

        if(user) {
            res.status(201).send({
                message : "User created sucessfully",
                user 
            })
        } 
    }
    catch(error) {
        res.status(500).send({
            message : "User Registration Unsuccessful",
            error: error.message
        })
    }
}

//User Login 
const userLogin = async (req,res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email : email})

        const userPassword = await bcrypt.compare(password, user.password)

        if(userPassword === false) {
            res.status(404).send({
                message : "Password Does Not Match",
                err
            })
        }

        const token = generateToken(user._id)
            res.status(200).send({
            message : "User Logged in successfully",
            user : {
                id : user._id,
                name : user.name,
                email : user.email
            },
            token,
            enrolledCourses : user.courses
        })
    }
    catch(error) {
        res.status(500).send({
            message : "User Login Unsuccessful",
            error: error.message
        })
    }
}

module.exports = {
    userRegister,
    userLogin,
}