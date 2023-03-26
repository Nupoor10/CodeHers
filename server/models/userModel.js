const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name: {
            type : String,
            required : [true, "Please provide a name"]
        },
        email : {
            type : String,
            required : [true, "Please provide an email ID"],
            unique: [true, "Email Already Exists"],
        },
        password : {
            type : String,
            required : [true, "Please provide a password"]
        },
        bio : String,
        links : [String],
        about : String,
        courses : [Number]
    },
    { timestamps: true}
)

const User = mongoose.model("User", userSchema)
module.exports = User