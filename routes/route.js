const express = require("express")
const Controller = require("../controllers/controller")
const router = express.Router()

router.get('/', Controller)

router.get('/register', Controller)
router.post('/register', Controller)

router.get('/login', Controller)
router.post('/login', Controller)
router.get('/logout', Controller)

router.get('/dashboard', Controller)
router.get('/dashboard/addCourse', Controller)
router.post('/dashboard/addCourse', Controller)
router.get('/dashboard/delete/:coursesId', Controller)

router.get('/courses', Controller)
router.get('/courses/:id', Controller)

module.exports = router