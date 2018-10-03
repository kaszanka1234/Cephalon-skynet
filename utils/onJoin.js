var config = require('../config.json');
exports.run = (client, message) => {
  if (message.guild.id != config.guildID) return;
  client.channels.get(config.channelBotLog).send("<@"+message.user.id+"> joined");
  try{
    hello(client, message);
  } catch (e) {
    console.log(e.stack);
  }
  //client.channels.get("488776821782085632").send('hmmmm');488843604731887641
}

function hello(client, message){
  var thonk = require('../utils/randomthonk.js');
  thonk = thonk.run();
  client.channels.get(config.channelGeneral).send("Hi there <@"+message.user.id+">, Welcome on **"+message.guild.name+"**, remember to read <#434384191820398593> and set your nickname here to the same as in game "+thonk+"\n\
"); 
  //var role = message.guild.roles.find('name', 'Initiate');
  message.addRole(config.roleGuest);
  
  //console.log(message.guild.roles.find('name', 'Initiate'));
}