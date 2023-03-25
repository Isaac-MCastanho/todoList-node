const routers = require("express").Router();
const tasksController = require("./controllers/tasksController");
const {
	validateTitle,
	validateStatus,
} = require("./middlewares/tasksMiddleware");

routers.get("/tasks", tasksController.getAll);
routers.post("/tasks", validateTitle, tasksController.post);
routers.put("/tasks", validateTitle, validateStatus, tasksController.put);
routers.delete("/tasks/:id", tasksController.delete);

module.exports = routers;
