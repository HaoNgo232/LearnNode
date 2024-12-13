require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes);

(async () => {
  //test connection
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connection database: ", error);
  }
})();
