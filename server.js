//===IMPORT NPM PACKAGES====================================
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')

//===STATIC DIRECTORY===================================
app.use(express.static('public'));

//===DATA PARSING===========================================
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//===DEPLOYING ON HEROKU====================================
mongoose.connect(process.env.MONGODB_URL || 'mongodb: //localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//===IMPORTING ROUTES======================================
app.use(require('./routes/htmlRoutes'))
app.use(require('./routes/workoutRoutes'))
  
  require('./config')
    .then(() => app.listen(process.env.PORT || 3000))
    .catch(e => console.error(e))