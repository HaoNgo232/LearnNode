const connection = require("../config/database");
const { get } = require("../routes/web");
const { getAllUsers, getUserById } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getABC = (req, res) => {
  res.send("Check abc");
};

const hoiTao = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  // let {email, name, city} = req.body
  console.log(">>> Check email = ", email, "name = ", name, "city = ", city);
  let [results, fields] = await connection.query(
    `INSERT INTO Users(email, name, city) VALUES(?, ?, ?)`,
    [email, name, city]
  );
  res.send("Create user successfully");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user }); // x <- y
};

module.exports = {
  getHomepage,
  getABC,
  hoiTao,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
