exports.run = (client, message, args) => {
	require('./searchweapon.js').run(client, message, args);
	return;
}