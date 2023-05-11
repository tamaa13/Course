const express = require('express')
const Router = require('./routes/route')
const session = require('express-session')

const app = express()
const port = 6969

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(session({
    secret: 'blekpinguhuy',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        sameSite: true
    }
}))

app.use(Router)

app.listen(port, () => {
    console.log(`=== PROJECT PEMERINTAH ${port}.000 JUTA  ===`)
})