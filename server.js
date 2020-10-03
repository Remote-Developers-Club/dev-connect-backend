/**
 * This is an Open source project 
 * Learn, expand and Share knowledge
 */

const path = require('path');
const express = require("express");
const app = express();
const connectDB = require('./config/db');


// Connection to database 
connectDB();

/**
 * Import routes from routes 
 */
// const posts = require('./routes/posts')
// const users = require('./routes/users');


/**
 * Configuring templating engine 
 */
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


/**
 * Express middlewares routes
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))


/**
 * Routing pages in
 */
// app.use('/api/users', users);
// app.use('/api/posts', posts);


/**
 * Starting the Server
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is runing on ${PORT}`);
});