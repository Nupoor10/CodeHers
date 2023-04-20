const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const config = require('./config/connectDB')
const connectDB = require('./config/connectDB')
const userRoutes = require('./routes/userRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const myCoursesRoutes = require('./routes/myCoursesRoutes')
const eventsRoutes = require('./routes/eventsRoutes')
const jobRoutes = require('./routes/jobsRoutes')
const resourcesRoutes = require('./routes/resourcesRoutes')

const PORT = process.env.PORT || 4040

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

connectDB()

app.get("/", (req,res) => {
    res.send("You have sucessfully reached the server")
})

app.use("/api",userRoutes);
app.use("/api/courses/", coursesRoutes);
app.use("/api/mycourses/", myCoursesRoutes);
app.use("/api/events/", eventsRoutes);
app.use("/api/jobs/", jobRoutes);
app.use("/api/resources/", resourcesRoutes);

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})
