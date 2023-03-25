const tasksModel = require("./../models/tasksModels");

exports.getAll = async (req, res) => {
	const tasks = await tasksModel.findAllTasks();
	const [data] = tasks;

	console.log(data);

	return res.status(200).json(data);
};

exports.post = async (req, res) => {
	const createdTask = await tasksModel.saveTask(req.body);

	return res.status(201).json(createdTask);
};

exports.delete = async (req, res) => {
	const { id } = req.params;

	await tasksModel.removeTask(id);

	return res.status(204).json();
};
