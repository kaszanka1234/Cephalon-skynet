exports.run = (client, message, args) => {
	// alias command
	require('./searchweapon.js').run(client, message, args);
	return;
}