const { Account, Course, Profile, Subscribe } = require('../models')
const bcrypt = require('bcryptjs')

class Controller {
    static home(req, res) {
        res.render('index')
    }

    static getRegister(req, res) {
        res.render('formRegister')
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
    static postRegister(req, res) {
        const { email, password, role } = req.body
        Account.create({ email, password, role })
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getLogin(req, res) {
        res.render('login')
    }

    static postLogin(req, res) {
        const { email, password } = req.body
        Account.findOne({ where: { email } })
            .then(Accounts => {
                if (Accounts) {
                    const isValidPassword = bcrypt.compareSync(password, Accounts.password)
                    if (isValidPassword) {
                        return res.redirect('/')
                    } else {
                        const errors = "invalid email/password"
                        return res.redirect(`/login?error=${errors}`)
                    }
                } else {
                    const errors = "invalid email/password"
                    return res.redirect(`/login?error=${errors}`)
                }
            })
            .catch((err) => res.send(err))
    }

}

module.exports = Controller