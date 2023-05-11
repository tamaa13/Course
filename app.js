const express = require('express')
const Router = require('./routes/route')

const app = express()
const port = 6969

app.use(express.urlencoded({ extended: false })) // diperlukan untuk membaca bahasa html di ejs
app.set('view engine', 'ejs')
app.use(Router)

app.listen(port, () => {
    console.log(`=== PROJECT PEMERINTAH ${port}.000 JUTA  ===`)
})