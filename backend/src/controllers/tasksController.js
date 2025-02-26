const { response } = require("express");

const getAll = (req, res) =>{
    return response.status(200).json({ message: 'Controller funcionando!'});
}

module.exports = {
    getAll
};