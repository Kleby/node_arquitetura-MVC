const Taks = require('../models/Task');

module.exports = class TaskController {
    static createTask(req, res){
        res.render('tasks/create-task')
    }

    static showTasks(req, res){
        res.render('tasks/all')
    }
}