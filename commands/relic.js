var config = require('../config.json');
exports.run = (client, message, args) =>{
    if (args.length != 2) {
        message.channel.send("wrong number of arguments\nuse eg. ?relic lith a1");
        return;
    }
    args[0] = args[0].toLowerCase();
    if(args[0]!="lith"&&args[0]!="meso"&&args[0]!="neo"&&args[0]!="axi"){
        message.channel.send("unrecognized relic era\nplease use Lith, Meso, Neo or Axi");
        return;
    }
    var era = '';
    var name = args[1].toUpperCase();
    era += args[0].charAt(0).toUpperCase();
    for(var i=1;i<args[0].length;i++){
        era+=args[0].charAt(i);
    }
    var common = [];
    var uncommon = [];
    var rare = [];

    var url = 'https://drops.warframestat.us/data/relics/'+era+'/'+name+'.json';
    //console.log(url);
    
    console.log(getData(url));
}

function getData(url){
    const https = require('https');
    let data = '';
    https.get(url, (resp) => {

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try{
                data = JSON.parse(data);
                //data = data.rewards.Intact;
            }catch(e){
                console.log(e.stack);
                message.channel.send("An error has occured");
                return;
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
    return data;
}