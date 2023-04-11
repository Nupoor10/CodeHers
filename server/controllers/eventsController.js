const events = require('../data/events')
const mongoose = require('mongoose')

const getAllEvents = (req,res) => {
    if(!events) {
        res.status(404).send({
            message : "No events found"
        })
    }
    else {
        res.status(200).send({
            message : "Events found successfully",
            events
        })
    }

}

module.exports = {
    getAllEvents
}