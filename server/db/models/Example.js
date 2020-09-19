const Sequelize = require("sequelize") //for things like Sequelize.STRING
//import your db
const db = require('../db')

//define your model
const Job = db.define('job', {
    title : {
        type : Sequelize.STRING,
        allowNull : false
    },
    logo : {
        type : Sequelize.STRING,
    },
    company : {
        type : Sequelize.STRING,
        allowNull : false
    },
    description : {
        type : Sequelize.STRING,
        allowNull : false
    }

})

//define any class or instance methods

//export your model
module.exports = Job
