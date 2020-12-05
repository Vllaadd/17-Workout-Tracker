const router = require('express').Router()
const workout = require('../models/workout')


//===showing previously logged workouts=======================
router.get('/workouts', (req, res) => {
    workout.find()
    .then(workouts => res.json(workouts))
    .catch(e => console.error(e))
})

//===creating a new workout===================================
router.post('/workouts', (req, res) => {
    workout.create({day: new Date()})
    .then((data) => res.json(data))
    .catch(e => console.error(e))
})
