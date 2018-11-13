var config = require('../config.json');
exports.run = (client, message, args) => {
	message.channel.send({
  "embed": {
    "title":"Current Commands",
    "description": "You can message commands marked (DM) to me in private to get answer too!",
    "color": 26879,
    "fields": [
      {
        "name": "Miscellaneous commands",
        "value": "?help - displays this message (DM)\n\
?ping - pong! (DM)\n\
?hmmm - probably broken ¯\\_(ツ)_/¯\n\
?randomthonk - gives you a random thonk (DM)\n\
?thonk - displays a MEGATHONK"
      },
      {
        "name":"Utility commands",
        "value":"?plainstime - displays current time on plains of eidolon (DM)\n\
?searchframe [name] - show info about given warframe (DM)\n\
?searchweapon [name] - show info about given weapon (DM)(WIP)\n\
?compareweapons [name] ? [name] - compares 2 weapons' stats (DM)(WIP)\n\
?relic [era] [name] - show relic drops (DM)(WIP)\n\
?relic [item] - show which relics the item is in(DM)(WIP)\n\
?sortie - display current sortie\n\
"
      },
      {
        "name": "Got any suggestions what else I could do or found a bug?",
        "value": "Message <@"+config.ownerID+">"
      }
    ]
  }
});
  if(message.guild.id != config.guildID) return;
  if(!message.member.roles.some(r=>["Warlord", "General", "Officer", "Sergeant"].includes(r.name))) return;
  message.channel.send({
  "embed": {
    "title":"Admin commands",
    "description": "\
?rules - for updating the rules\n\
?ranks - for updating the ranks list\n\
?approve @user - sets user's role to initiate\n\
?warn @user [reason] - send a warning to announcements channel, valid reasons are 'kick_offline', 'offline_soldier [days]', 'offline_initiate [days]'\n\
?inactive @user - \n\
ask !help for list of moderation commands",
    "color": 26879
  }
});
}