const connection = require('./connection');

const getAll = async function(){
    const tasks = connection.execute('SELECT * FROM tasks');
    return tasks;
};

module.exports = {
     getAll
};