const routers = require("express").Router();
const tasksController = require("./controllers/tasksController");

routers.get("/tasks", tasksController.getAll);
routers.post("/tasks", tasksController.post);

module.exports = routers;
