const connection = require("../config/database");
const { get } = require("../routes/web");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");
const User = require("../models/user");

const getHomepage = async (req, res) => {
  let results = await User.find({});
  return res.render("home.ejs", { listUsers: results });
};
const getABC = (req, res) => {
  res.send("Check abc");
};

const hoiTao = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  // let { email, name, city } = req.body;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  await User.create({ email, name, city });
  res.send("Create user successfully");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  //let user = await getUserById(userId);
  let user = await User.findById(userId).exec();
  console.log(">>> Check user = ", user);
  res.render("edit.ejs", { userEdit: user }); // x <- y
};

const postUpdateUser = async (req, res) => {
  // let {email, name, city} = req.body
  let userId = req.body.userId;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );

  // res.send("Updated user successfully");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getABC,
  hoiTao,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
