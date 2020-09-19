//import your db
const db = require('./db')
const faker = require('faker')
//import your models
const Job = require('./models/Example')

//state your model associations (hasOne etc)
const syncAndSeed = async () => {
    await db.sync({force : true})

const jobs = []
while(jobs.length < 30) {
    jobs.push(Job.create({
        title : faker.name.jobTitle(),
        logo : faker.image.business(),
        company : faker.company.companyName(),
        description : faker.name.jobDescriptor()
    }))
}

}

//export your db and Models (so they all can be imported from a single central location)
module.exports = {
    Job,
    db,
    syncAndSeed
}
