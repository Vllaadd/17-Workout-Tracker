//===IMPORT NPM PACKAGES====================================
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const db = require("./models");



const app = express();

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

//===requiring api routes and html routes======================================
app.use(require('./routes'))

app.get('/', (req, res) => {
  res.send(path.join(__dirname, './public/index.html'))
})

app.get('/exercise', (req, res) => {
  res.send(path.join(__dirname, './public/exercise.html'))
})

app.get('/stats', (req, res) => {
  res.send(path.join(__dirname, './public/stats.html'))
})
  
//===STARTING OUR EXPRESS APP===============================
app.listen(PORT, () =>{
  console.log(`App listening on http://localhost:${PORT}`)
})
