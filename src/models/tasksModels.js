const connection = require("./connection");

exports.findAll = async () => {
	const tasks = await connection.execute("SELECT * FROM tasks");

	return tasks;
};

exports.saveTask = async (task) => {
	const { title } = task;

	const dateUTC = new Date(Date.now()).toUTCString();

	const query = "INSERT INTO tasks VALUES (NULL,?,?,?)";
	const [createdTask] = await connection.execute(query, [
		title,
		"Pendente",
		dateUTC,
	]);

	return { insertId: createdTask.insertId };
};
