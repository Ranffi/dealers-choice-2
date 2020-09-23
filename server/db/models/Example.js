const Sequelize = require("sequelize") //for things like Sequelize.STRING
//import your db
const db = require('../db')

//define your model
const Job = db.define('job', {
    title : {
        type : Sequelize.STRING,
        allowNull : false
    },
    company : {
        type : Sequelize.STRING,
        allowNull : false
    },
    description : {
        type : Sequelize.TEXT,
        allowNull : false
    }

})

//define any class or instance methods

//export your model
module.exports = Job
