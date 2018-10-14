var config = require('../config.json');
var checkVault = require('../utils/isVaulted.js');
function Relic(){
    this.isVaulted = false;
    this.common = [];
    this.uncommon = [];
    this.rare = [];
    this.tier = '';
    this.name = '';
    this.chance = () => {
        this.int = [25.33,11,2];
        this.exceptional = [23.33,13,4];
        this.flawless = [20,17,6];
        this.rad = [20,16.67,10];
    };
}
exports.run = (client, message, args) =>{
    var url = '';
    var type = '';
    args[0] = args[0].toLowerCase();
    if(args[0]=="lith"||args[0]=="meso"||args[0]=="neo"||args[0]=="axi"){
        // searching for relic
        var era = '';
        era += args[0].charAt(0).toUpperCase();
        for(var i=1;i<args[0].length;i++){
            era+=args[0].charAt(i);
        }
        var name = args[1].toUpperCase();
        url = 'https://drops.warframestat.us/data/relics/'+era+'/'+name+'.json';
        type = 'relic';
    }else{
        //searching for item or wrong name
        url = 'https://drops.warframestat.us/data/hmmm.json';
        type = 'item';
    }
    const https = require('https');
    var data = '';
    var relic = new Relic();
    https.get(url, (resp) => {
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end',() => {
            if(resp.statusCode==200){
                //relic/item data recieved
                try{
                    data = JSON.parse(data);
                }catch(e){
                    console.log(e.stack);
                    message.channel.send("Parsing error occured");
                    data = null;
                }
                //console.log(data);
            }else if(resp.statusCode==404){
                //error 404 recieved
                message.channel.send("I have not found anything matching your search");
                data = null;
            }
            if(data===null){
                return;
            }else if(type == 'relic'){
                //console.log(data.rewards.Radiant);
                relic.tier = data.tier;
                relic.name = data.name;
                relic.isVaulted = checkVault.run(era,name);
                data.rewards.Intact.forEach((reward) => {
                    if(reward.chance > 16){
                        relic.common.push(reward.itemName);
                    }else if(reward.chance > 5){
                        relic.uncommon.push(reward.itemName);
                    }else if(reward.chance > 1){
                        relic.rare.push(reward.itemName);
                    }
                });
                //console.log(relic);
                message.channel.send({"embed":{
                    "title":relic.isVaulted?relic.tier+' '+relic.name+' (Vaulted)':relic.tier+' '+relic.name,
                    "fields":[
                        {
                            "name":"Common",
                            "value":relic.common[0]+'\n'+relic.common[1]+'\n'+relic.common[2]
                        },
                        {
                            "name":"Uncommon",
                            "value":relic.uncommon[0]+'\n'+relic.uncommon[1]
                        },
                        {
                            "name":"Rare",
                            "value":relic.rare[0]
                        }
                    ]
                }});
            }
        });
    });
}
