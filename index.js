const templateEngin = require('nunjucks')
const express = require('express')
const {body, validationResult} = require('express-validator');
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
    .post(body('title', 'task title required').trim().isLength({min: 1}),
        async (req,res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors.array())
                res.render('list.html',{errors:errors.array(), tasks: await getAllTasks()})
                return }
            await addTask(req.body.title)
        res.redirect('/')
    })


app.listen(5000, () => {
    console.log('listening on http://127.0.0.1:5000')
})