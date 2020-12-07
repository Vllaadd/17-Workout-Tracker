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
mongoose.connect('mongodb+srv://Vlad:columbia20mongo@cluster0.xm9q3.mongodb.net/workout?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
(req, res) => {
  console.log('Connected to database!');
})

//===IMPORTING ROUTES======================================
app.use(require('./routes/htmlRoutes'))
app.use(require('./routes/workoutRoutes'))
  
//===STARTING OUR EXPRESS APP===============================
app.listen(PORT, () =>{
  console.log(`App listening on http://localhost:${PORT}`)
})
