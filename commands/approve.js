var config = require('../config.json');
exports.run = (client, message, args) => {
  if(message.guild.id != config.guildID) {console.log("keke");return;}
  if(!message.member.roles.some(r=>["Warlord", "General", "Officer", "Sergeant"].includes(r.name))) {console.log("kek");return;}
  if(args.length>1)return;
  var users = message.mentions.users;
  users.forEach(function(user){
    if(message.guild.members.get(user.id).roles.some(r=>["Guest"].includes(r.name))){
      message.guild.members.get(user.id).addRole("488685606868746252");
      message.guild.members.get(user.id).removeRole("452098650529857537");
      
      client.channels.get("488776821782085632").send("<@"+user.id+"> approved");
      var nick = "";
      if(message.guild.members.get(user.id).nickname!==null){
        nick = message.guild.members.get(user.id).nickname;
      }else{
        nick = user.username;
      }
      client.channels.get("434384554091085832").send("**"+nick+"** is now a member of the clan! Welocme and have fun!");
    }else{
      message.channel.send("Can't perform this action on given user");
    }
  });
}