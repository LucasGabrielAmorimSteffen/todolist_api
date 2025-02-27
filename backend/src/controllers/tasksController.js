const response = require("express");
const taskModel    = require('../models/tasksModel');

const getAll = async (req, res) =>{
    const tasks = await taskModel.getAll();
    return res.status(200).json({ message: 'Controller funcionando!'});
}

module.exports = {
    getAll
};