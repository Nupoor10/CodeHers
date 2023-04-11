const jobs = require('../data/jobs')
const mongoose = require('mongoose')

const getAllJobs = (req,res) => {
    if(!jobs) {
        res.status(404).send({
            message : "No opportunities found"
        })
    }
    else {
        res.status(200).send({
            message : "Opportunities found successfully",
            jobs
        })
    }

}

module.exports = {
    getAllJobs
}