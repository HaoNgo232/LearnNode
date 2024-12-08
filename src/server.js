require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const configViewEngine = require('./config/viewEngine')
const { config } = require('dotenv')
const webRoutes = require('./routes/web')
const mysql = require('mysql2')

const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app)

// khai báo route
app.use('/test', webRoutes)

// test connecttion
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'hoidanit',
  port: 3307, // default: 3306
  password: '123456' // default: empty
});

// trỏ đến databese để thực thi truy vấn
connection.query(
  'SELECT * FROM Users u',
  function (err, results, fields) {
    console.log('>>> check results =', results)
    console.log('>>> check fields =', fields)
  }
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})