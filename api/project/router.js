// build your `/api/projects` router here

const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getAll()
    .then(re => {
        res.json(re)
    })
    .catch(err => {
        res.status(500).json({ message: err.message})
    });
})

router.post('/', (req, res) => {
    const resource = req.body
    Projects.add(resource)
    .then(re => {
        res.status(201).json(re)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    });
})

module.exports = router;