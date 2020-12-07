const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const db = require("./models");



const app = express();

// //===showing previously logged workouts=======================
// router.get('/workouts', (req, res) => {
//     Workout.find()
//     .then(workouts => res.json(workouts))
//     .catch(e => console.error(e))
// })

// //===creating a new workout===================================
// router.post('/workouts', (req, res) => {
//     Workout.create({day: new Date()})
//     .then((data) => res.json(data))
//     .catch(e => console.error(e))
// })

// //===adding a new exerice in existing workout================
// router.put('/workouts/:id', (req, res) => {   //each workout previously created has an ID. In order to update the workout we need to find the id. 
//     console.log(req.params.id)
//     Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
//       .then(() => res.sendStatus(200))
//       .catch(e => console.error(e))
//   })

// module.exports = router;


  
  // api routes
  
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      })
  })
  
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body);
    console.log(params.id);
    db.Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    })
  });
  
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    })
  });
  
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    })
  });
  
  app.delete("/api/workouts", ({ body }, res) => {
  
  })