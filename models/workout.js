const mongoose = require("mongoose")

var workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: [{
        name:{type: String},
        type:{type: String},
        weight: {type: Number},
        sets: {type: Number},
        reps: {type: Number},
        duration: {type: Number},
        distance: {type: Number}
    }]
})

var Workout = mongoose.model('workout', workoutSchema)

module.exports = Workout;