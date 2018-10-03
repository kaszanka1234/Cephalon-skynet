exports.run = (client, message, args) => {
  if(message.channel.id != "491368999892942858") return;
  message.delete(message.id);
  
  var warlord = message.guild.roles.get("434382172606955522");
  var general = message.guild.roles.get("434389537826013186");
  var officer = message.guild.roles.get("488133427321634826");
  var sergeant = message.guild.roles.get("488133274699300886");
  var soldier = message.guild.roles.get("434393086869635074");
  var initiate = message.guild.roles.get("488685606868746252");
  var guest = message.guild.roles.get("452098650529857537");
  
  message.channel.send({embed:{
    "description":warlord+"\n\
Leader of the clan, person with all permissions, only warlord can ban from discord server",
    "color":13632027
    }}).then(msg =>{
  message.channel.send({embed:{
    "description":general+"\n\
Administrators of the clan they have almost all permissions, they can kick members out of the clan and construct new dojo rooms",
    "color":16312092
    }}).then(msg =>{
  message.channel.send({embed:{
    "description":officer+"\n\
Moderators of the clan they can promote other members and mute in text channels too. If you think you should be promoted, or have trouble changing your nickname, message one of them",
    "color":19967
    }}).then(msg =>{
  message.channel.send({embed:{
    "description":sergeant+"\n\
People that help maintain the clan, they can recruit new members and queue new research, can also mute members in voice channels. If you want someone added to the clan or you see new research to be done, messeage one of them",
    "color":65339
    }}).then(msg =>{
  message.channel.send({embed:{
    "description":soldier+"\n\
Accepted member of the clan",
    "color":5414442
    }}).then(msg =>{
  message.channel.send({embed:{
    "description":initiate+"\n\
Every new member is assigned the role if initiate, if they are active and obey the rules, they are promoted to rank of soldier in a few days, else they are getting kicked",
    "color":10197915
    }}).then(msg =>{
  message.channel.send({embed:{
    "description":guest+"\n\
Friends of the clan that are not in the clan itself",
    "color":10197915
    }});
  });
  });
  });
  });
  });
  });
}