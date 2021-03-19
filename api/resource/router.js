// build your `/api/resources` router here

const express = require('express')
const uniqueName = require('./middleware')
const Resources = require('./model')

const router = express.Router()


router.get('/', (req, res, next) => {
    Resources.getAll()
    .then(re => {
        res.json(re)
    })
    .catch(next);
})

router.post('/', uniqueName, (req, res, next) => {
    const resource = req.body
    Resources.add(resource)
    .then(re => {
        res.status(201).json(re)
    })
    .catch(next);
})

module.exports = router;