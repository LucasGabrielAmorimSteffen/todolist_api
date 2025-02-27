const connection = require('./connection');

const getAll = async function(){
    const tasks = await connection.query('SELECT * FROM tasks');
    return tasks.rows;
};

const createTask = async (tasks)=>{
    const {titulo} = tasks.rows;
    const dateUTC = new Date(Date.now()).toUTCString();
    const SQL = 'INSERT INTO tasks(titulo, status, created_at) VALUES (?, ?, ?)';
    const [createdTask] = await connection.query(SQL, [title, 'pendente', dateUTC])
    return createTask;
}

module.exports = {
     getAll,
     createTask
};