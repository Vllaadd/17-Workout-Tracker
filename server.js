//===IMPORT NPM PACKAGES====================================
const express = require('express')
const = require('path')
const app = express()
const mongoose = require('mongoose')

//===SERVING STATIC FILES===================================
app.use(express.static(join(__dirname, 'public')))

//===DATA PARSING===========================================
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//===DEPLOYING ON HEROKU====================================
mongoose.connect(process.env.MONGODB_URL || 'mongodb: //localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongodb+srv://Vlad:columbia20mongo@cluster0.xm9q3.mongodb.net/testing?retryWrites=true&w=majorityz

//===IMPORTING ROUTES======================================
app.use(require('./routes'))
  
  require('./config')
    .then(() => app.listen(process.env.PORT || 3000))
    .catch(e => console.error(e))