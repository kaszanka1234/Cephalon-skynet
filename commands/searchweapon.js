let betterPolarity = require('../utils/betterPolarity.js');

exports.run = (client, message, args) => {
  if(message.author.id != "333769079569776642"){ message.channel.send("this function is a work in porgress"); return;}
  
  if (args.length < 1) return;
  var arg = "";
  args.forEach(function(i){
    arg+=i+" ";
  });
  if(arg.toLowerCase().includes("mk1")){
    message.channel.send("Sorry! Due to a bug in API i can't search for mk1 weapons\n\
Don't pretend you wanted tu use them anyway :wink:");
    return;
  }
  const https = require('https');
  
  https.get('https://api.warframestat.us/weapons/search/'+arg, (resp) => {
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
    
    /*if(data[1] != undefined && (data[1].name == data[0].name+" Prime" || data[0].name == data[1].name+" Prime")) {
      respond(client, message, data[1]);
    }*/
    
    if(data[1] != undefined){
      var weapons = "";
      var dataLength = data.length>6?6:data.length;
      for(var i=0; i<dataLength; i++){
        weapons += "\n"+data[i].name;
      }
       message.channel.send("I have also found other weapons matching your search\n\
"+data.length>6?"showing first 6 matching entries:":""+weapons);
    }
    
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
  
}

function respond(client, message, weap){
  //console.log(weap);
  var polarities = "";
  if(weap.polarities[0]!=undefined){
    for(var i=0;i<weap.polarities.length;i++){
      polarities += betterPolarity.run(weap.polarities[i])+" ";
    }
  }else{
    polarities = "none";
  }
  message.channel.send({"embed":{
      "title":weap.name,
      "url": weap.wikiaUrl,
      "description":weap.description,
      "thumbnail": {
        "url": weap.wikiaThumbnail
      },
      "fields":[
        {
          "name":"total damage",
          "value":weap.damage.toString(),
          "inline":true
        },
        {
          "name":"fire rate",
          "value":weap.fireRate.toString(),
          "inline":true
        },
        {
          "name":"magazine size",
          "value":weap.magazineSize.toString(),
          "inline":true
        },
        {
          "name":"total ammo",
          "value":weap.ammo.toString(),
          "inline":true
        }
      ]
    }});
}
