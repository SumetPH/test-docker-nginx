require("dotenv").config();

const port = process.env.PORT || 8000;
const express = require("express");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("./config/multer");
const route = require("./route");
const passport = require("passport");
const passportFacebook = require("./config/passportFacebook");

// check upload folder
if (!fs.existsSync("./upload")) {
  fs.mkdirSync("./upload");
  console.log("created upload folder.");
}

// config
const app = express();
app.use("/upload", express.static("upload"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", "client", "dist")));
app.use(multer.array("image"));
app.use(morgan("dev"));
app.use(cors());
app.use(passport.initialize());
passport.use(passportFacebook);

// route
route(app);

app.listen(port, () =>
  console.log(`😎 Server stared port : http://localhost:${port}`)
);

module.exports = app;
