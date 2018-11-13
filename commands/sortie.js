const config = require('../config.json');
const https = require('https');
exports.run = (client,message,args) => {
    https.get('https://api.warframestat.us/pc/sortie', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            data = JSON.parse(data);

            message.channel.send('Defeat '+data.boss+'\'s forces ('+data.faction+')\nends in: '+data.eta).then(()=>{
                message.channel.send("**1.** "+data.variants[0].missionType+' - '+data.variants[0].node+'\n'+data.variants[0].modifier).then(()=>{
                    message.channel.send("**2.** "+data.variants[1].missionType+' - '+data.variants[1].node+'\n'+data.variants[1].modifier).then(()=>{
                        message.channel.send("**3.** "+data.variants[2].missionType+' - '+data.variants[2].node+'\n'+data.variants[2].modifier);
                    });
                });
            });
        });
    });
}