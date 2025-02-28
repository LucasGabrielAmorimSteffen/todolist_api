const connection = require('./connection');

const getAll = async function() {
    const tasks = await connection.query('SELECT * FROM tasks');
    return tasks.rows;
};

const createTask = async (tasks) => {
    const {title} = tasks;
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES ($1, $2, $3) RETURNING id';
    const { rows } = await connection.query(query, [title, 'pendente', dateUTC]);
    return {id: createTask.id}; 
};

const deleteTask = async function(id){
    const removedTask = await connection.query('DELETE FROM tasks WHERE id = $1',[id])
    return removedTask;
};

const updateTask = async (id, tasks)=>{
    const { title, status} = tasks;
    const SQL = `UPDATE tasks
                    SET title = $1, status = $2
                  WHERE id = $3`;
    const updatedTask = await connection.query(SQL, [title, status, id])
    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};