const templateEngin = require('nunjucks')
const express = require('express')
const {getAllTasks, addTask} = require("./todo_model");
const app = express()

app.use(express.urlencoded({extended: false}))
templateEngin.configure('views', {
    express: app
});
app.route("/")
    .get(async (req, res) => {
        res.render('list.html', {tasks: await getAllTasks()})
    })
    .post(async (req,res) => {
        await addTask(req.body.title)
        res.redirect('/')
    })


app.listen(5000, () => {
    console.log('listening on http://127.0.0.1:5000')
})