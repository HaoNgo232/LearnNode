const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI, postCreateUserAPI, putUpdateUserAPI,
  deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI,
} = require("../controllers/apiController");
const {
  postCreateCustomer, postCreateArrayCustomer, getAllCuctomers,
  putUpdateCustomer, deleteAcustomer,
} = require("../controllers/customerController");
const {
  postCreateProject, getAllProject, deleteProject, putUpdateProject
} = require("../controllers/projectController");
const { postCreateTask, getAllTasks, putUpdateTask,
  deleteTask,
} = require("../controllers/taskController");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFilesAPI);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCuctomers);
routerAPI.put("/customers", putUpdateCustomer);
routerAPI.delete("/customers", deleteAcustomer);

routerAPI.post("/projects", postCreateProject);
routerAPI.get("/projects", getAllProject);
routerAPI.put("/projects", putUpdateProject);
routerAPI.delete("/projects", deleteProject);

routerAPI.post("/task", postCreateTask);
routerAPI.get("/task", getAllTasks)
routerAPI.put("/task", putUpdateTask);
routerAPI.delete("/task", deleteTask);

routerAPI.get("/info", (req, res) => {
  console.log(">>> req.query: ", req.query);
  return res.status(200).json({
    message: "Welcome to my API",
    data: req.query,
  });
});

routerAPI.get("/info/:name/:address", (req, res) => {
  console.log(">>> req.params: ", req.params);
  return res.status(200).json({
    message: "Welcome to my API",
    data: req.params,
  });
});
module.exports = routerAPI;
