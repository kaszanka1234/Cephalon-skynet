var config = require('../config.json');
exports.run = (client, message, args) => {
  if(message.guild === null) return;
	message.delete(message.id);
  if (message.author.id != config.ownerID) return;
  console.log(process.env.NODE_ENV);
}