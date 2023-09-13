const express = require("express"); // import express
const UserController = require("./controllers/UserController"); // import User controller

const routes = express.Router(); //

routes.get("/users", UserController.index); // route return all users
routes.post("/users", UserController.store); // route register users
routes.put("/users/:id", UserController.update); // route update users
routes.delete("/users/:id", UserController.delete); // route delete users

module.exports = routes; // export routes
