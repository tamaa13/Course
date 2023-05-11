const { Accounts, Courses, Profiles, Subscribes } = require('../models')

class Controller {
    static home(req, res) {
        res.render('index')
    }

    static getRegister(req, res){
        res.render('formRegister')
    }
}

module.exports = Controller