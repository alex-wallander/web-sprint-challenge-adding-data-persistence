// build your `/api/tasks` router here

const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Tasks.find()
    .then(task => {
        console.log(task)
        res.json(task)
    })
    .catch(next)
})

router.post('/', (req, res)=> {
    const task = req.body
    Tasks.add(task)
    .then(t => {
        res.status(201).json(t)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

module.exports = router;