exports.run = (client, message) => {
  if (message.guild.id != "434382006575431690") return;
  try{
    goodBye(client, message);
  } catch (e) {
    console.log(e.stack);
  }
  //client.channels.get("488776821782085632").send('hmmmm');488843604731887641
}

function goodBye(client, message){
  client.channels.get("434384554091085832").send(message.user.username+" has left us, sad to see you go");
  
  client.channels.get("488776821782085632").send(message.user.username+"#"+message.user.discriminator+" left");
  //var role = message.guild.roles.find('name', 'Initiate');
  //message.addRole("488685606868746252");
  //console.log(message.guild.roles.find('name', 'Initiate'));
}