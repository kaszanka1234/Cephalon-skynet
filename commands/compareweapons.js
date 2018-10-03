var config = require('../config.json');
exports.run = (client, message, args) => {
  if(message.author.id != config.ownerID){ message.channel.send("this function is a work in porgress"); return;}
}