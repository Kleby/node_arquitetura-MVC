const { DataTypes} = require('sequelize');
const dbConn = require('../db/conn');

const Task = dbConn.define('Task', {
    title: {
        type: DataTypes.STRING,
        required:true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }
});

module.exports = Task;