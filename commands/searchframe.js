var config = require('../config.json');
let betterPolarity = require('../utils/betterPolarity.js');

exports.run = (client, message, args) => {
  if (args.length < 1) return;
  var arg = "";
  args.forEach(function(i){
    arg+=i+" ";
  });
  const https = require('https');
  
  https.get('https://api.warframestat.us/warframes/search/'+arg, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    data = JSON.parse(data);
    if(data[0] == undefined) {
      message.channel.send("I have not found anything, try something different");
      return;
    }else 
    respond(client, message, data[0]);
    
    if(data[1] != undefined && (data[1].name == data[0].name+" Prime" || data[0].name == data[1].name+" Prime")) {
      respond(client, message, data[1]);
    }
    
    if(data[1] != undefined && data[2] != undefined){
      var frames = "";
      var dataLength = data.length>6?6:data.length;
      for(var i=0; i<dataLength; i++){
        frames += "\n"+data[i].name;
      }
       message.channel.send("I have also found other warframes matching your search"+frames);
    }
    
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
  
}

function respond(client, message, frame){
  var polarities = frame.polarities[0]==undefined?"none":"";
  for(var i=0;i<frame.polarities.length;i++){
    polarities += betterPolarity.run(frame.polarities[i])+" ";
  }
  message.channel.send({"embed":{
      "title":frame.name,
      "url": frame.wikiaUrl,
      "description":frame.description,
      "thumbnail": {
        "url": frame.wikiaThumbnail
      },
      "fields":[
        {
          "name":"health",
          "value":frame.health.toString(),
          "inline":true
        },{
          "name":"shield",
          "value":frame.shield.toString(),
          "inline":true
        },{
          "name":"armor",
          "value":frame.armor.toString(),
          "inline":true
        },{
          "name":"energy",
          "value":frame.power.toString(),
          "inline":true
        },{
          "name":"sprint speed",
          "value":frame.sprint.toString(),
          "inline":true
        },{
          "name":"required MR",
          "value":frame.masteryReq.toString(),
          "inline":true
        },
        {
          "name":"Introduced in verison",
          "value":frame.introduced.toString()
        },
        {
          "name":"aura polarity",
          "value":frame.aura==undefined?"none":betterPolarity.run(frame.aura),
          "inline":true
        },
        {
          "name":"mod polarities",
          "value":polarities,
          "inline":true
        }        
      ]
    }});
}