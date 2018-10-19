exports.run = (client, message, args) => {
	// alias command
	require('./searchframe.js').run(client, message, args);
	return;
}