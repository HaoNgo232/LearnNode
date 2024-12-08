const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()



const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME

// config tempate engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

// config static file
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.send('Hello World! với nodemon')
})

app.get('/abc', (req, res) => {
  res.send('Check abc')
})

app.get('/hoitao', (req, res) => {
  //res.send('<h1>Tao tra loi</h1>')
  res.render('sample.ejs')
})

app.listen(port, hostname,() => {
  console.log(`Example app listening on port ${port}`)
})