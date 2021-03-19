// build your `Project` model here

const db = require('../../data/dbConfig')

function getAll() {
    return db('projects')
}

function add(project) {
    if (project) {
        return db('projects')
        .insert(project)
        .then(([project_id]) => {
            return db('projects').where('project_id', project_id)
        })
    }
}

module.exports = {
    getAll,
    add
}