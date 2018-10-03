var config = require('../config.json');
let betterPolarity = require('../utils/betterPolarity.js');
let thonkmeter = require('../utils/thonkmeter.js');

exports.run = (client, message, args) => {
  message.channel.send("this function is still a work in porgress");
  
  if (args.length < 1){message.channel.send("You have to specify what should i look for"); return;}
  var arg = "";
  args.forEach(function(i){
    arg+=i+" ";
  });
  arg = arg.slice(0, -1);
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
    }
    try{
      for(var i=0;i<data.length;i++){
        if(arg.toLowerCase()==data[i].name.toLowerCase()){
          respond(client, message, data[i]);
          break;
        }
      }
    }catch(e){
      message.channel.send("An error has occured");
      console.log(e.stack);
    }
    
    if(data.length>1){
      var weapons = "";
      var dataLength = data.length>6?6:data.length;
      for(var i=0; i<dataLength; i++){
        weapons += "\n"+data[i].name;
      }
       message.channel.send("I have also found other weapons matching your search\n\
"/*+data.length>6?"showing first 6 matching entries:":""*/+weapons);
    }
    
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
  
}

function respond(client, message, weap){
  //console.log(weap);
  //return;
  if(weap.category=="Melee"){
    message.channel.send("Melee weapons are still being implemented");
    return;
  }else if(weap.sentinel){
    message.channel.send("Sentinel weapons are still being implemented");
    return;
  }else{
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
            "value":(Math.floor(weap.fireRate.toString()*10)/10).toString(),
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
          },
          {
            "name":"reload",
            "value":weap.reloadTime.toString()+" seconds",
            "inline":true
          },
          {
            "name":"accuracy/spread",
            "value":weap.accuracy.toString(),
            "inline":true
          },
          {
            "name":"critical hits",
            "value":Math.floor(weap.criticalChance*100).toString()+"% for x"+weap.criticalMultiplier.toString(),
            "inline":true
          },
          {
            "name":"status chance",
            "value":(Math.floor(weap.procChance*1000)/10).toString()+"%",
            "inline":true
          },
          {
            "name":"mastery rank",
            "value":weap.masteryReq.toString(),
            "inline":true
          },
          {
            "name":"riven disposition",
            "value":thonkmeter.run(weap.disposition.toString(),5),
            "inline":true
          },
          {
            "name":"type",
            "value":weap.category.toString()+", "+weap.type.toString(),
            "inline":true
          },
          {
            "name":"mod polarities",
            "value":polarities,
            "inline":true
          },
          {
            "name":"damage types",
            "value":"placeholder"
          }
        ]
      }});
  }
}