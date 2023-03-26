const mongoose = require('mongoose')
const dotenv = require('dotenv')
dbURL = "mongodb+srv://Nupoor10:Nupoor10@cluster0.pvesuf2.mongodb.net/?retryWrites=true&w=majority"

async function connectDB() {
    const conn = await mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
}

connectDB().then( () => {
    console.log("Sucessfully connected to database")
  }
).catch (
    err => {
        console.log(`Error Occurred : ${err}`)
    }
)

module.exports = connectDB;