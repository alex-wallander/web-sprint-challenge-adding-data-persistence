// build your `Task` model here

const db = require('../../data/dbConfig')

function find() {
    return db('tasks as t')
    .leftJoin('projects as p', ('t.project_name', 'p.project_name'), ('t.project_description', 'p.project_description'))
    .select( "t.task_id", "t.task_description", "t.task_notes", "t.task_completed", "p.project_name","p.project_description")
    .groupBy('t.project_id')
    .orderBy('t.project_id', 'asc')
}

function add(task) {
    return db('tasks as t')
    .insert(task)
    .then(([task_id]) => {
        return db('tasks as t').where('task_id', task_id)
    })
}

module.exports = {
    find,
    add
}