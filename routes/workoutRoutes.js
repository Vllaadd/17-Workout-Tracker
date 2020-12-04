const router = require('express').Router()
const workout = require('../models/workout')


// GET all workouts
router.get('/workouts', (req, res) => {
    workout.find()
    .then(workouts => res.json(workouts))
    .catch(e => console.error(e))
})
