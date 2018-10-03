var config = require('../config.json');

var icons = require('../utils/damageToIcon.js');

exports.run = (client, message, args) => {
  if(message.guild === null) return;
	message.delete(message.id);
  if (message.author.id != config.ownerID) return;
  message.channel.send(icons.run(args));
}