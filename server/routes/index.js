const router = require("express").Router()
//import models from /db
const Job = require('../db/models/Example')

//routes go here
router.get('/jobs', async(req, res, next) => {
    try{
        const jobs = await Job.findAll()
        res.send(jobs)
    }
    catch(err){
        next(err)
    }
})

router.get('/jobs/:id', async(req, res, next) => {
    try{
        const job = await Job.findByPk(req.params.id)
        res.send(job)
    }
    catch(err){
        next(err)
    }
})

router.delete('/jobs/:id', async(req, res, next) => {
    try{
        const job = await Job.findByPk(req.params.id)
        job.destroy()
    }
    catch(err){
        next(err)
    }
})

router.post('/jobs', async(req, res, next) => {
    try{
        const job = await Job.create(req.body)
        await job.destroy()
    }
    catch(err){
        next(err)
    }
})

router.put('/jobs/:id', async(req, res, next) => {
    try{
        const job = await Job.findByPk(req.params.id)
        await job.update(req.body)
    }
    catch(err){
        next(err)
    }
})

module.exports = router
