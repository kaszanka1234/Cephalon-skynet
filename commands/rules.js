var config = require('../config.json');
exports.run = (client, message, args) => {
  if(message.guild === null) return;
	message.delete(message.id);
	if (message.channel.id != 434384191820398593) return;
	message.channel.send(
	{"embed": {
	"title": "Most importantly you need discord and be on this server",
	"description": "It might sound obvious but it needs to be written somewhere"
    "color": 16711680,
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
	message.channel.send(
	{"embed": {
	"title": "Discord rules",
	"description": "\
		**1.** Be respectful.\n\
		**2.** Sending/Linking any harmful material such as viruses, IP grabbers or harmware results in an immediate and permanent ban.\n\
		**3.** Use proper grammar and spelling and don't spam.\n\
		**4.** Usage of excessive extreme innapropriate langauge is prohibited.\n\
		**5.** Mentioning @everyone, the Moderators or a specific person without proper reason is prohibited.\n\
		**6.** Don't post someone's personal information without permission.\n\
		**7.** Please use a name that others will be able to recognize you as from in-game. Do not use fake nickname.\n\
		**8.** NO advertising of any kind on our Discord server, This includes links to sites that earn you money. Admins decide what is allowed and what is not. DONT asume anything check with an admin first.\n\
		\n\
		It's also a good idea to mute <#486865905788387328> channel to not get spammed\n\
		",
    "color": 16711680,
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
	message.channel.send(
	{"embed": {
	"title": "In-game Rules",
	"description": "\n\
		**1.** All rulles that apply to discord also apply to in game chat\n\
		**2.** If you are inactive for more than 30 days you can be kicked out of clan, if you can't play for extended period of time contact <@333769079569776642>\n\
		**3.** To reach the rank of soldier in clan you have to be at least MR3 and be a member of the clan for at least 2 days, if you are inactive in these 2 days you can be kicked out\n\
		**4.** Higher ranks are given by the highest ranked members of the clan as they are needed, don't ask for a higher rank unless you have a good reason for it\n\
		",
    "color": 9502975,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
      "text": "Last updated"
    },
    
    "author": {
      "name": "Kaszanka_1234",
      "icon_url": "https://cdn.discordapp.com/avatars/333769079569776642/8f59a0b729c629b286c15d042eb042cf.webp?size=32"
    },
    "fields": [
      {
        "name":"Do you have any sugestions regarding our clan?",
        "value": "PM/mention me (<@333769079569776642>) !"
      }
    ]
	}
	}
	);
	message.channel.send(
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