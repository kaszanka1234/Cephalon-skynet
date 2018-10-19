var config = require('../config.json');
var checkVault = require('../utils/isVaulted.js');
class Relic {
    constructor(tier, name) {
        this.tier = tier;
        this.name = name;
        this.common = [];
        this.uncommon = [];
        this.rare = [];
        this.isVaulted = checkVault.run(tier, name);
    }
}
class Item {
    constructor(name) {
        this.name = name;
        this.relics = [];
        this.isVaulted = true;
    }
}
exports.run = (client, message, args) => {
    // return if less than 2 arguments
    if(args.length<2){
        message.channel.send('You need to specify at least 2 arguments');
        return;
    }
    const url = 'https://drops.warframestat.us/data/relics.json';
    // process command arguments
    let searchingItem,searchingRelic,relic;
    var arg = '';
    args.forEach(element => {
        arg+=element[0].toUpperCase();
        for(var i=1;i<element.length;i++){
            arg+=element[i];
        }
        arg+=' ';
    });
    arg=arg.trim();
    // string argument ready

    // check if searching for relic or item
    if(arg.split(' ')[0]=='Lith'||arg.split(' ')[0]=='Meso'||arg.split(' ')[0]=='Neo'||arg.split(' ')[0]=='Axi'){
        // searching for relic
        searchingRelic = new Relic(arg.split(' ')[0], arg.split(' ')[1]);
    }else{
        // searching for item or typo
        searchingItem = new Item(arg);
    }
    // imort http and get JSON file
    const https = require('https');
    https.get(url, resp => {
        let JSONstring = '';
        let json = '';
        let relics = [];

        // data chunk has been recieved
        resp.on('data', chunk => {
            JSONstring+=chunk;
        });

        // full data has been recieved
        resp.on('end', () => {

            // wrong url has been requested
            // tell the user and abort
            if(resp.statusCode==404){
                message.channel.send('api error occureds');
                return;
            }
            // correct data has been recieved
            else if(resp.statusCode==200){
                //console.log('ok');
            }
            // try to parse json
            try{
                json=JSON.parse(JSONstring);
            }catch(e){
                console.log(e.stack);
                message.channel.send('error occured');
            }

            // handle relic or item
            if(searchingItem != undefined){
                // handling item
                json.relics.forEach(item =>{
                    if(item.state=='Intact'){
                        let useRelic = false;
                        let tmp = new Relic(item.tier, item.relicName);
                        item.rewards.forEach(reward => {
                            //console.log(reward.itemName == searchingItem.name);
                            if(reward.itemName == searchingItem.name){
                                useRelic = true;
                                if(!tmp.isVaulted){
                                    searchingItem.isVaulted = false;
                                }
                            }
                            if(reward.chance>25){
                                tmp.common.push(reward.itemName);
                            }else if(reward.chance>10){
                                tmp.uncommon.push(reward.itemName);
                            }else if(reward.chance>1){
                                tmp.rare.push(reward.itemName);
                            }
                        });
                        if(useRelic){
                            searchingItem.relics.push(tmp);
                        }
                    }
                });
                if(searchingItem.relics.length==0){
                    message.channel.send("Item does not exist");
                    return;
                }
                // console.log(searchingItem.relics[0]);
                let relicList = [];
                for(let i=0;i<searchingItem.relics.length;i++){
                    searchingItem.relics[i].common.forEach(r =>{
                        if(r==searchingItem.name){
                            const isVaulted = searchingItem.relics[i].isVaulted?'(V)':'';
                            const someString = searchingItem.relics[i].tier+' '+searchingItem.relics[i].name+' (common) '+isVaulted;
                            // console.log(someString);
                            relicList.push(someString);
                            return;
                        }
                    });
                    searchingItem.relics[i].uncommon.forEach(r =>{
                        if(r==searchingItem.name){
                            const isVaulted = searchingItem.relics[i].isVaulted?'(V)':'';
                            const someString = searchingItem.relics[i].tier+' '+searchingItem.relics[i].name+' (uncommon) '+isVaulted;
                            // console.log(someString);
                            relicList.push(someString);
                            return;
                        }
                    });
                    searchingItem.relics[i].rare.forEach(r =>{
                        if(r==searchingItem.name){
                            const isVaulted = searchingItem.relics[i].isVaulted?'(V)':'';
                            const someString = searchingItem.relics[i].tier+' '+searchingItem.relics[i].name+' (rare) '+isVaulted;
                            // console.log(someString);
                            relicList.push(someString);
                            return;
                        }
                    });
                }
                console.log(relicList);
                let ugaBugaNigga = '';
                const nigaBugaNiggaNigga = ' can be fond in:';
                let ugaNiggaNiggaBuga = '';
                if(searchingItem.isVaulted){
                    ugaBugaNigga = " is completly vaulted and"
                }
                relicList.forEach(niggaBugaUgaNigga =>{
                    ugaNiggaNiggaBuga += '\n'+niggaBugaUgaNigga;
                });
                let niggaNiggaBugaNigga = searchingItem.name+ugaBugaNigga+nigaBugaNiggaNigga+ugaNiggaNiggaBuga;
                
                message.channel.send(niggaNiggaBugaNigga);
            }else if(searchingRelic != undefined){
                // handling relic
                json.relics.forEach(item => {
                    if(item.tier == searchingRelic.tier && item.relicName == searchingRelic.name && item.state == 'Intact'){
                        item.rewards.forEach(reward => {
                            if(reward.chance>25){
                                searchingRelic.common.push(reward.itemName);
                            }else if(reward.chance>10){
                                searchingRelic.uncommon.push(reward.itemName);
                            }else if(reward.chance>1){
                                searchingRelic.rare.push(reward.itemName);
                            }
                        });
                        return;
                    }
                });
                message.channel.send({"embed":{
                    "title":searchingRelic.isVaulted?searchingRelic.tier+' '+searchingRelic.name+' (Vaulted)':searchingRelic.tier+' '+searchingRelic.name,
                    "fields":[
                        {
                            "name":"Common",
                            "value":searchingRelic.common[0]+'\n'+searchingRelic.common[1]+'\n'+searchingRelic.common[2]
                        },
                        {
                            "name":"Uncommon",
                            "value":searchingRelic.uncommon[0]+'\n'+searchingRelic.uncommon[1]
                        },
                        {
                            "name":"Rare",
                            "value":searchingRelic.rare[0]
                        }
                    ],
                    "timestamp": new Date(config.vaultUpdateTime),
                    "footer": {
                        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                        "text": "Vault list updated"
                    }
                }});
            }

        });
    });
}
