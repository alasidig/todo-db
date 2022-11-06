#Todo Using SqLite DB
A simple example to show how to use the SqLite database to store the ToDo tasks.
## How to run
- the main script is index.js
- run it on [replit.com](https://replit.com/@alasidig/todo-db#index.js) or locally:
- run `npm i` to install the dependencies
- run `node init_db.js` to create the database and the table
- run `npm run dev` and use the browser to see the list of tasks and add some

## Brief explanation
### `init_db.js`:
- contains one function name `init`
- it connects to the database and create the table and insert few rows
### `todo_model.js`:
- a module tha exports two functions `getAllTasks`, and `addTask`
- on each function do these steps:
1. connect to the DB
2. run a SQL command 
3. close the connection
### `index.js`:
- creates an express app and configure it to use `nunjucks` template engine
- for get request on '/' render the list.html template passing the list of tasks returned by the `getAllTasks` function
- for post request on '/' use the `addTask` function to store the new task in the DB. and redirect to '/' to render the updated list of tasks.
