
const getHomepage = (req, res) => {
    res.send('Hello World! với nodemon')
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