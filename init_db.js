const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
async function init() {
    //1. get the connection to the database
    const db = await sqlite.open({
        filename: 'tasks_store.db',
        driver: sqlite3.Database
    })
    //1. exec: executes the sql and returns nothing
    await db.exec(`create table if not exists tasks(
id integer primary key autoincrement, 
title text not null,
done integer default 0 -- SqLite deoesn't have a boolean type
)`)

    // 3. insert records in the table note true is treated as 1
    const info = await db.run(`insert into tasks('title','done') 
values  ('Study',0),
        ('Sleep',true),
        ('exersise',false)`)
    console.log(info)
}
init().then()