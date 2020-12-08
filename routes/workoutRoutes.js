const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const db = require("./models");

const app = express();

//===showing previously logged workouts=======================
router.get('/workouts', (req, res) => {
    Workout.find()
    .then(workouts => res.json(workouts))
    .catch(e => console.error(e))
})

//===creating a new workout===================================
router.post('/workouts', (req, res) => {
    Workout.create({day: new Date()})
    .then((data) => res.json(data))
    .catch(e => console.error(e))
})

//===adding a new exerice in existing workout================
router.put('/workouts/:id', (req, res) => {   //each workout previously created has an ID. In order to update the workout we need to find the id. 
    console.log(req.params.id)
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  //===get workouts in range=================================
  router.get('/workouts/range', (req, res) => {
    Workout.find().limit(7)                      
      .then(workout => res.json(workout))
      .catch(e => console.error(e))
    console.log(req.body)
  })

module.exports = router;


  
