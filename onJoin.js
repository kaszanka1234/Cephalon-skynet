exports.run = (client, message) => {
  if (message.guild.id != "434382006575431690") return;
  client.channels.get("488776821782085632").send("<@"+message.user.id+"> joined");
  try{
    hello(client, message);
  } catch (e) {
    console.log(e.stack);
  }
  //client.channels.get("488776821782085632").send('hmmmm');488843604731887641
}

function hello(client, message){
  client.channels.get("434384554091085832").send("Hi there <@"+message.user.id+">, Welcome on **"+message.guild.name+"**, remember to read <#434384191820398593> and set your nickname here to the same as in game"); 
  //var role = message.guild.roles.find('name', 'Initiate');
  message.addRole("488685606868746252");
  //console.log(message.guild.roles.find('name', 'Initiate'));
}