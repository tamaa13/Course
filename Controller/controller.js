const { Account, Course, Profile, Subscribe } = require('../models')
const bcrypt = require('bcryptjs');


class Controller {
    static home(req, res) {
        res.render('index')
    }

    static getRegister(req, res){
        res.render('formRegister')
    }

    static getLogin(req, res){
        res.render('formLogin')
    }

    static postLogin(req, res){
        
    }

    static dashboard(req, res){
        Course.findAll()
        .then((data) => res.render('dashboard', {courses: data}))
        .catch((err) => res.send(err))
        
    }

    static getCourse(req, res){
        res.render('addCourse')
    }

    static postCourse(req, res){
        const { courseName, category, price } = req.body
        console.log(req.body);
        Course.create({ courseName, category, price })
            .then(() => res.redirect("/dashboard"))
            .catch((err) => res.send(err))
    }
}

module.exports = Controller