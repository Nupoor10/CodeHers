const resources = require('../data/resources')
const mongoose = require('mongoose')

const getAllResources = (req,res) => {
    if(!resources) {
        res.status(404).send({
            message : "No resources found"
        })
    }
    else {
        res.status(200).send({
            message : "Resources found successfully",
            resources
        })
    }

}

module.exports = {
    getAllResources
}