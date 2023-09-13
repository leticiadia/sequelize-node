const Sequelize = require("sequelize"); // import class sequelize
const dbConfig = require("../config/database"); // import file database.js

const User = require("../models/User"); // import User Model

const connection = new Sequelize(dbConfig); // create connection with database

User.init(connection); // Inicialize connection with database

module.exports = connection; // export connection
