const express = require("express")
const Controller = require("../Controller/controller")
const Router = express.Router()

Router.get('/', Controller.home)

Router.get('/register', Controller.getRegister)
Router.post('/register', Controller.postRegister)

Router.get('/login', Controller.getLogin)
Router.post('/login', Controller.postLogin)
Router.get('/logout', Controller)

Router.get('/dashboard', Controller.dashboard)
Router.get('/dashboard/addCourse', Controller.getCourse)
Router.post('/dashboard/addCourse', Controller.postCourse)

Router.get('/dashboard/edit/:courseId', Controller.editCourse)
Router.post('/dashboard/edit/:courseId', Controller.updateCourse)

Router.get('/dashboard/delete/:courseId', Controller.deleteCourse)

Router.get('/courses', Controller)
Router.get('/courses/:id', Controller)

module.exports = Router