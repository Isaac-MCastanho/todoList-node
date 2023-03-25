const routers = require("express").Router();
const tasksController = require("./controllers/tasksController");
const tasksMiddlewares = require("./middlewares/tasksMiddleware");

routers.get("/tasks", tasksController.getAll);
routers.post("/tasks", tasksMiddlewares.validateBody, tasksController.post);

module.exports = routers;
