//===IMPORT NPM PACKAGES====================================
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const db = require('./models');
const { on } = require('process');
const app = express();

//===SETTING UP THE PORT=================================
const PORT = process.env.PORT || 3000;

//===STATIC DIRECTORY===================================
app.use(express.static(path.join(__dirname, 'public')))

//===DATA PARSING===========================================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


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

//===CONNECTING TO MONGODB======================================
mongoose.connect('mongodb://localhost/workout', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
mongoose.connection.once('open', function(){
  console.log('Connected to the database!');
}).on('error', function(error){
  console.log('Connection error:', error)
})
 
  
//===STARTING OUR EXPRESS APP===============================
app.listen(PORT, () =>{
  console.log(`App listening on http://localhost:${PORT}`)
})
