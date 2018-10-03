var config = require('../config.json');
exports.run = (client, message, args) => {
  if(message.author.id!=config.ownerID) return;
  message.delete(message.id);
  var users = message.mentions.users;
  
  users.forEach(function(user){
    user.send("Please remember to have your nickname on the discord server set to the same name you use in Warframe\n\
*This is an automated message, please don't respond to it*");
  });
}