const express = require('express')
const { getHomepage, getABC, hoiTao } = require('../controllers/homeController')
const router = express.Router()


// Cấu trúc 1 route router.Method('url', handlers - cụ thể là gọi tham chiếu hàm từ file homeController)
router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/hoitao', hoiTao)

module.exports = router