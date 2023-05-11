const express = require("express")
const Controller = require("../Controller/controller")
const Router = express.Router()

Router.get('/', Controller.home)

Router.get('/register', Controller)
Router.post('/register', Controller)

Router.get('/login', Controller)
Router.post('/login', Controller)
Router.get('/logout', Controller)

Router.get('/dashboard', Controller)
Router.get('/dashboard/addCourse', Controller)
Router.post('/dashboard/addCourse', Controller)
Router.get('/dashboard/delete/:coursesId', Controller)

Router.get('/courses', Controller)
Router.get('/courses/:id', Controller)

module.exports = Router