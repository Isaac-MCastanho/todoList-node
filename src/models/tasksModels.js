const connection = require("./connection");

exports.findAll = async () => {
	const tasks = await connection.execute("SELECT * FROM tasks");

	return tasks;
};
