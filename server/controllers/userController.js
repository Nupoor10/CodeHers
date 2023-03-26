const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

//User Registration
const userRegister = (req,res) => {
    bcrypt.hash(req.body.password, 10).then(
        (hashedPassword) => {
            const user =  new User(
                {
                    name : req.body.name,
                    email : req.body.email,
                    password : hashedPassword,
                    bio : req.body.bio,
                    links : req.body.links,
                    about : req.body.about,
                    courses : req.body.courses
                }
            )
        
            user.save().then(
                result => {
                    res.status(201).send({
                        message : "User created sucessfully",
                        result
                    })
                }
            ).catch(
                err => {
                    res.status(500).send({
                        message : "User was not created",
                        err
                    })
                }
            )
        }).catch(
            (err) => { 
                res.status(500).send({
                    message : "Password field is required",
                    err
            })
        })
}

//User Login
const userLogin = (req,res) => {
    User.findOne({email : req.body.email}).then(
        user => {
            bcrypt.compare(req.body.password, user.password)
            .then(
                result => {
                    if(!result) {
                        return res.status(400).send({
                            message : "Password is Incorrect",
                            error
                        })
                    }
                    else {
                        const token = jwt.sign(
                            { 
                                userId: user._id,
                                userEmail: user.email,
                            },
                            "RANDOM-TOKEN",
                            {expiresIn : "30 days"}
                        )
    
                        res.status(201).send({
                            message : "Login sucessfull",
                            userInfo : {
                                name : user.name,
                                email : user.email,
                                id : user._id,
                                token
                            },
                            enrolledCourseList : user.courses  
                        })
                    }
                }
            ).catch(
                err => {
                    res.status(400).send({
                        message : "Password is Incorrect",
                        err
                    })
                    console.log(err)
                }
            )
        }
    ).catch(
        err => {
            res.status(404).send({
                message : "User not found",
                err
            })
        }
    )
}

//User Profiles
const userProfile = (req,res) => {
    User.findOne({_id : req.params.id})
    .then(
        user => {
            res.status(200).send({
            message : "User Found Successfully",
            user
        })
        }
    )
    .catch(
        err => {
            res.status(404).send({
                message : "User was not found",
                err
            })
        }
    )
}

module.exports = {
    userRegister,
    userLogin,
    userProfile
}