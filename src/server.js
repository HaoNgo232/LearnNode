require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// config file upload
app.use(fileUpload());

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

(async () => {
  //test connection
  try {
<<<<<<< HEAD
    await connection(); // using Mongoose

    // using MongoDB Driver
    // Connection URL
    // const url = process.env.DB_HOST_WTIH_DRIVER;
    // const client = new MongoClient(url);

    // // Database Name
    // const dbName = process.env.DB_NAME;
    // await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db(dbName);
    // const collection = db.collection('customers');

    // collection.insertOne({
    //   "name": "Hao Ngo",
    //   "age": 30,
    //   address: {
    //     city: "Hanoi",
    //     country: "Vietnam"
    //   }
    // })
=======
    // await connection(); // using Mongoose

    // using MongoDB Driver
    // Connection URL
    const url = process.env.DB_HOST_WTIH_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('customers');

    collection.insertOne({
      "name": "Hao Ngo",
      "age": 30,
      address: {
        city: "Hanoi",
        country: "Vietnam"
      }
    })
>>>>>>> c9ee4515bce693623b0467664c0a0432cd64ecff

    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connection database: ", error);
  }
})();
