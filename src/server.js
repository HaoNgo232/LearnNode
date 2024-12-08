require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const configViewEngine = require('./config/viewEngine')
const { config } = require('dotenv')
const webRoutes = require('./routes/web')

const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app)

// khai báo route
app.use('/test', webRoutes)


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})