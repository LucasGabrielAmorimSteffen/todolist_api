const connection = require('./connection');

const getAll = async function(){
    const tasks = connection.query('SELECT * FROM tasks');
    return tasks;
};

module.exports = {
     getAll
};