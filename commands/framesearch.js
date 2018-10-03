exports.run = (client, message, args) => {
	require('./searchframe.js').run(client, message, args);
	return;
}