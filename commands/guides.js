var config = require('../config.json');
exports.run = (client, message, args) => {
    if(message.guild.id != config.guildID) return;
    if(message.author.id != config.ownerID) return;
    client.channels.get(config.channelGuides).send(
        {"embed": {
        "title": "Collection of useful links",
        "description": "\
            [List of alerts and invasions](https://deathsnacks.com/wf/) \n\
            [Warframe Wiki](http://warframe.wikia.com/wiki/WARFRAME_Wiki) \n\
            [Time on the Plains of Eidolon](http://clockofeidolon.com/) \n\
            [Online marketplace](http://clockofeidolon.com/) \n\
            [Online markletplace for Riven mods](https://riven.market/) and [2nd one](https://www.wftrader.com/) \n\
            ",
        "color": 65428,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "Last updated"
        },
        
        "author": {
          "name": "Kaszanka_1234",
          "icon_url": "https://cdn.discordapp.com/avatars/333769079569776642/8f59a0b729c629b286c15d042eb042cf.webp?size=32"
        }
        }
        }
        );
}