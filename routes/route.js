const express = require("express")
const Controller = require("../Controller/controller")
const Router = express.Router()

Router.get('/', Controller.home)

Router.get('/register', Controller.getRegister)
Router.post('/register', Controller.postRegister)

Router.get('/login', Controller.getLogin)
Router.post('/login', Controller.postLogin)

Router.use(function (req, res, next) {
    if (!req.session.userId) {
        const error = 'Login First !!!'
        res.redirect(`/login?error=${error}`)
    } else {
        next()
    }
})

const admin = function (req, res, next) {
    if (req.session.role !== 'admin') {
        const error = 'user'
        res.redirect(`/courses?error=${error}`)
    } else {
        next()
    }
}

const user = function (req, res) {
    if (req.session.role !== 'user') {
        const error = 'admin'
        res.redirect(`/dashboard?error=${error}`)
    } else {
        next()
    }
}

Router.get('/dashboard', admin, Controller.dashboard)
Router.get('/dashboard/addCourse', Controller.getCourse)
Router.post('/dashboard/addCourse', Controller.postCourse)
Router.get('/dashboard/delete/:coursesId', Controller.deleteCourse)

Router.get('/courses', user, Controller.getCourses) // bedanya pake s
Router.post('/courses', user, Controller.postCourses) // bedanya pake s
// Router.get('/courses/:id', Controller)




Router.get('/logout', Controller)
module.exports = Router