const routers = require("express").Router();
const tasksController = require("./controllers/tasksController");

routers.get("/tasks", tasksController.getAll);

module.exports = routers;
