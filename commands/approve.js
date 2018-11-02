var config = require('../config.json');
exports.run = (client, message, args) => {
  // set user as a clan member

  // check for guild
  if(message.guild.id != config.guildID) {return;}
  // check if command issuer has correct role
  if(!message.member.roles.some(r=>["Warlord", "General", "Officer", "Sergeant"].includes(r.name))) {
    message.channel.send("Insufficient permissions");
    return;
  }

  // allow to only process one user at a time
  // TO-DO
  // check if you can process multiple users
  if(args.length>1)return;

  // get all mentioned users
  var users = message.mentions.users;

  // perform action on each user
  users.forEach(function(user){
    // check if user can be promoted
    if(message.guild.members.get(user.id).roles.some(r=>["Guest"].includes(r.name))){
      // set role to initiate and remove guest role
      message.guild.members.get(user.id).addRole(config.roleInitiate);
      message.guild.members.get(user.id).removeRole(config.roleGuest);
      
      // get user's nickname if they have one
      // or set it to their username
      var nick = "";
      if(message.guild.members.get(user.id).nickname!==null){
        nick = message.guild.members.get(user.id).nickname;
      }else{
        nick = user.username;
      }
      var staffNick = "";
      if(message.guild.members.get(message.author.id).nickname!==null){
        staffNick = message.guild.members.get(message.author.id).nickname;
      }else{
        staffNick = message.author.username;
      }
      

      // send message to logs channel
      client.channels.get(config.channelBotLog).send("<@"+user.id+"> (**"+nick+"**, "+user.id+") approved by "+staffNick);

      // send message to global channel
      client.channels.get(config.channelGeneral).send("**"+nick+"** is now a member of the clan! Welcome and have fun!");
    }
    // if can't promote send a message
    else{
      message.channel.send("Can't perform this action on given user");
    }
  });
}
