const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8000;
const path = require("path");
const config = require("./config/database");

mongoose.connect(
  config.database,
  { useNewUrlParser: true }
);
mongoose.set("debug", true);

app.set("json spaces", 40);
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const pages = require("./routes/pages.js");
const users = require("./routes/users.js");
const sidebar = require("./routes/sidebar.js");

app.use("/pages", pages);
app.use("/users", users);
app.use("/sidebar", sidebar);

app.listen(port, () => {
  console.log("listening on port", port);
});
