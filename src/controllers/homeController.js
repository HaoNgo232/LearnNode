const connection = require('../config/database')
const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('Check abc')
}

const hoiTao = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    // let {email, name, city} = req.body
    console.log('>>> Check email = ', email, 'name = ', name, 'city = ', city)
    let [results, fields] = await connection.query(`INSERT INTO Users(email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city])
    console.log('>>> Check results: ', results)
    res.send('Create user successfully')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    hoiTao,
    postCreateUser,
    getCreatePage
}