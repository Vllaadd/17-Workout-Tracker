//===IMPORT NPM PACKAGES====================================
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')

//===SETTING UP THE PORT=================================
const PORT = process.env.PORT || 3000;

//===STATIC DIRECTORY===================================
app.use(express.static('public'));

//===DATA PARSING===========================================
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//===DEPLOYING ON HEROKU====================================
mongoose.connect(process.env.MONGODB_URL || 'mongodb: //localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

//===IMPORTING ROUTES======================================
app.use(require('./routes/htmlRoutes'))
app.use(require('./routes/workoutRoutes'))
  

app.listen(PORT, () =>{
  console.log(`App listening on http://localhost:${PORT}`)
})
