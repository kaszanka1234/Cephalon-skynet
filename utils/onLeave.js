var config = require('../config.json');
exports.run = (client, message) => {
  // notifiy if someone leaves

  // check for guild
  if (message.guild.id != config.guildID) return;

  // send message to logs channel
  client.channels.get(config.channelBotLog).send(message.user.username+"#"+message.user.discriminator+" left");
  
  // tries to send global message
  try{
    goodBye(client, message);
  } catch (e) {
    console.log(e.stack);
  }
}

function goodBye(client, message){
  // send leave message
  client.channels.get(config.channelGeneral).send(message.user.username+" has left us, sad to see you go\n\
Press F to pay respects [*]");
}