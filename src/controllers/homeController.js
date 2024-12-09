const connection = require('../config/database')
const getHomepage = (req, res) => {
    let user = []
    // trỏ đến databese để thực thi truy vấn
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            user = results
            console.log('>>> check results =', results)
            console.log('>>> check user =', user)
            res.send(JSON.stringify(user))
        }
    )
}

const getABC = (req, res) => {
    res.send('Check abc')
}

const hoiTao = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    hoiTao
}