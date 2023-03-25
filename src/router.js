const routers = require("express").Router();
const tasksController = require("./controllers/tasksController");
const tasksMiddlewares = require("./middlewares/tasksMiddleware");

routers.get("/tasks", tasksController.getAll);
routers.post("/tasks", tasksMiddlewares.validateBody, tasksController.post);
routers.put("/tasks", tasksController.put);
routers.delete("/tasks/:id", tasksController.delete);

module.exports = routers;
