const tasksModel = require("./../models/tasksModels");

exports.getAll = async (req, res) => {
	const tasks = await tasksModel.findAll();
	const [data] = tasks;

	console.log(data);

	return res.status(200).json(data);
};

exports.post = async (req, res) => {
	const insert = await tasksModel.saveTask(req.body);
	console.log(insert);
	return res.status(201).json(insert);
};
