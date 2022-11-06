const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const getDbConnection = async () => {
    return await sqlite.open({
        filename: 'tasks_store.db',
        driver: sqlite3.Database
    })
}

async function getAllTasks() {
    const db = await getDbConnection();
    const rows = await db.all('select * from tasks')
    await db.close()
    console.log(rows)
    return rows
}
const addTask = async (title) => {
    const db = await getDbConnection();
    const meta = await db.run(`insert into tasks('title') values ('${title}')`)
    await db.close()
    return meta
}
module.exports = {getAllTasks, addTask}