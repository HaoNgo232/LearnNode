const express = require('express')

const router = express.Router()
router.get('/', (req, res) => {
    res.send('Hello World! với nodemon')
})

router.get('/ab', (req, res) => {
    res.send('Check abc')
})

router.get('/hoitao', (req, res) => {
    //res.send('<h1>Tao tra loi</h1>')
    res.render('sample.ejs')
})

module.exports = router