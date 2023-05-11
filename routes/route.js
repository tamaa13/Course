const express = require("express")
const Controller = require("../Controller/controller")
const Router = express.Router()

Router.get('/', Controller.home)

Router.get('/register', Controller.getRegister)
Router.post('/register', Controller.postRegister)

Router.get('/login', Controller.getLogin)
Router.post('/login', Controller.postLogin)
Router.get('/logout', Controller)

Router.get('/dashboard', Controller)
Router.get('/dashboard/addCourse', Controller)
Router.post('/dashboard/addCourse', Controller)
Router.get('/dashboard/delete/:coursesId', Controller)

Router.get('/courses', Controller)
Router.get('/courses/:id', Controller)

module.exports = Router