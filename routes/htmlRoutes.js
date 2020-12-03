//===PATH PACKAGE TO GET THE CORRECT FILE PATH FOR OUR HTML===========
var path = require("path");

//===BELOW CODE HANDLES WHEN USERS VISIT A PAGE==========================
module.exports = function(app){
    app.get('/', (req, res) => {
        res.sendFile(join(__dirname, './public/index.html'))
      })
      
      app.get('/exercise', (req, res) => {
        res.sendFile(join(__dirname, './public/exercise.html'))
      })
      
      app.get('/stats', (req, res) => {
        res.sendFile(join(__dirname, './public/stats.html'))
      })
}
