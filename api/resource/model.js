// build your `Resource` model here

const db = require('../../data/dbConfig')

function getAll() {
    return db('resources')
}

function add(resource) {
    if (resource) {
        return db('resources')
        .insert(resource)
        .then(([resources_id]) => {
            return db('resources').where('resource_id', resources_id)
        })
    }
}

module.exports = {
    getAll,
    add
}