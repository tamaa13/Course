const { Accounts, Courses, Profiles, Subscribes } = require('../models')

class Controller {
    static home(req, res) {
        res.render('index')
    }
}

module.exports = Controller