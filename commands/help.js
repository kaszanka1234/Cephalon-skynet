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
?thonk - displays a MEGATHONK\n\
?rules - for updating the rules"
      },
      {
        "name":"Utility commands",
        "value":"?plainstime - displays current time on plains of eidolon (DM)\n\
?searchframe [name] - show info about given warframe (DM)\n\
?searchweapon [name] - show info about given weapon (DM)(WIP)\n\
?compareweapons [name] ? [name] - compares 2 weapons' stats (DM)(WIP)\n\
"
      },
      {
        "name": "Got any suggestions what else I could do or found a bug?",
        "value": "Message <@333769079569776642>"
      }
    ]
  }
});
}