var config = require('../config.json');
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
    https.get(url, (resp) => {
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end',() => {
            console.log(resp.statusCode);
            if(resp.statusCode==200){
                //relic/item data recieved
                try{
                    data = JSON.parse(data);
                }catch(e){
                    console.log(e.stack);
                    message.channel.send("Parsing error occured");
                    data = null;
                }
                console.log(data);
            }else if(resp.statusCode==404){
                //error 404 recieved
                message.channel.send("I have not found anything matching your search");
            }
        });
    });

    var common = [];
    var uncommon = [];
    var rare = [];
    
}

function relicDrops(era, name){
    var url = 'https://drops.warframestat.us/data/relics/'+era+'/'+name+'.json';
    var relic = getJSON(url);
    console.log(relic);
}

function getJSON(url){
    
}