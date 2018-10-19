var config = require('../config.json');
exports.run = (client, message) => {
  // greets new users

  // check for guild
  if (message.guild.id != config.guildID) return;

  // send message to logs channel
  client.channels.get(config.channelBotLog).send("<@"+message.user.id+"> joined");
  
  // tries to greet new users
  try{
    hello(client, message);
  } catch (e) {
    console.log(e.stack);
  }
}

function hello(client, message){
  // import thonks and choose random one
  var thonk = require('../utils/randomthonk.js');
  thonk = thonk.run();

  // send greet message
  client.channels.get(config.channelGeneral).send("Hi there <@"+message.user.id+">, Welcome on **"+message.guild.name+"**, remember to read <#434384191820398593> and set your nickname here to the same as in game "+thonk+"\n"); 
  // set role to guest
  message.addRole(config.roleGuest);
}