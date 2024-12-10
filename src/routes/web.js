const express = require("express");
const {
  getHomepage,
  getABC,
  hoiTao,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");
const router = express.Router();

// Cấu trúc 1 route router.Method('url', handlers - cụ thể là gọi tham chiếu hàm từ file homeController)
router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/hoitao", hoiTao);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
