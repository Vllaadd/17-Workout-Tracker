module.exports = require('mongoose').connect('mongodb://', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})