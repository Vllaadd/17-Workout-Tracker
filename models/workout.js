const { Schema } = require("mongoose")

const = require('mongoose')

module.exports = model('workout', new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: [{
        type:{type: String},
        name:{type: String},
        duration: {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        distance: {type: Number}
    }]
}))