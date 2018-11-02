const config = require('../config.json');
exports.run = (client,message,args) => {
    if(message.guild.id !=  config.guildID) return;
    if(message.author.id != config.ownerID) return;

    message.delete(message.id);

    var warlord = message.guild.roles.get(config.roleWarlord);
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
                    "value": general+"\n\
You are here to help maintain the clan and decide it's fate\n\
If dark sectors armstice ever gets lifted you will be coordinating attacks on rails"
                },
                {
                    "name":"\u200b",
                    "value": officer+"\n\
You can promote other members and moderate discord and clan chat\n\
Your duties include promoting others to soldiers (see rules) or sergeants (consult your superiors)"
                },
                {
                    "name":"\u200b",
                    "value": sergeant+"\n\
You can invite new people to clan and assingn them role of Initiate on discord with '?approve @user', but make sure they have set their discord nickname to exactly the same as they use in game AND they are actually in the clan\n\
Your duties include helping other clan members and starting any new research added with new updates\n\
When inviting people use this link https://discord.gg/Q6NDbvc"
                }
                
            ]
        }
    });
}