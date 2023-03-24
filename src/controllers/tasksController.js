const tasksModel = require("./../models/tasksModels");

exports.getAll = async (req, res) => {
	const tasks = await tasksModel.findAll();
	const [data] = tasks;

	console.log(data);

	return res.status(200).json(data);
};
