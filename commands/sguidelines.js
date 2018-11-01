const config = require('../config.json');
exports.run = (client,message,args) => {
    if(message.guild.id !=  config.guildID) return;
    if(message.author.id != config.ownerID) return;

    message.delete(message.id);

    var warlord = message.guild.roles.get('488856481224196097');
    let general = message.guild.roles.get(config.roleGeneral);
    let officer = message.guild.roles.get(config.roleOfficer);
    let sergeant = message.guild.roles.get(config.roleSergeant);
  
    message.channel.send({
        "embed":{
            "title":"Staff guidelines",
            "description":"hmmm",
            "color":9502975,
            "timestamp":new Date(),
            "footer":{
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                "text": "Last updated"
            },
            "author": {
                "name": "Kaszanka_1234",
                "icon_url": "https://cdn.discordapp.com/avatars/333769079569776642/8f59a0b729c629b286c15d042eb042cf.webp?size=32"
            },
            "fields": [
                {
                    "name":"\u200b",
                    "value": warlord+"\n\
hmmm"
                },
                {
                    "name":"\u200b",
                    "value": general+"\n\
hmmm"
                },
                {
                    "name":"\u200b",
                    "value": officer+"\n\
hmmm"
                },
                {
                    "name":"\u200b",
                    "value": sergeant+"\n\
hmmm"
                }
                
            ]
        }
    });
}