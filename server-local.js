const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const jsonParser = bodyParser.json();
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is runing on ${PORT}`);
});

