////////// BOT Code //////////
const Discord = require('discord.js'); //import discord framework
const client = new Discord.Client(); //create discord client instance
const mysql = require('./utils/mySQL.js'); // import mysql lib

const placeholder = require('./config.json'); //load config file

//react to messages
client.on('message', message => {
  
  //
  let retrieveConfig = mysql.retriveConfig(message.guild.id);
  retrieveConfig.then((config) => {
    //split message to command and it's arguments
    let args = message.content.slice(config.prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    //ignore the message if the author is bot or the message doesn't start with the prefix
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    
    //ignore if dev version is used by not-owner
    if(process.env.ENV == "dev" && message.author.id != config.ownerID) return;
  
    //executes a command if it finds a matching command file
    try {
      //reloads the command file cache
      delete require.cache[require.resolve(`./commands/${cmd}.js`)];
      
      //loads and runs the command file
      let commandFile = require(`./commands/${cmd}.js`);
      commandFile.run(client, message, args);
    } 
    //logs any errors to console
    catch (e) {
      console.log(e.stack);
    }
  });

	
  
});

//reacts if someone joins the server
client.on("guildMemberAdd", message => {
  
  //executes a matching command file
  try{
    //reloads the cache
		delete require.cache[require.resolve("./utils/onJoin.js")];
    
    //loads and executes the file
    let onJoin = require("./utils/onJoin.js");
    onJoin.run(client, message);
  } 
  //logs any errors
  catch (e){
    console.log(e.stack);
  }
});

client.on("guildMemberRemove", message => {
  
  //executes a matching command file
  try{
    
    //reloads the cache
		delete require.cache[require.resolve("./utils/onLeave.js")];
    
    //loads and executes the file
    let onLeave = require("./utils/onLeave.js");
    onLeave.run(client, message);
  }

  //logs any errors
  catch (e){
    console.log(e.stack);
  }
});

//logs to console if bots starts correctly
client.on('ready', () => console.log('Bot started'));

//logs in as bot
client.login(process.env.TOKEN);

////////// End of BOT Code //////////

//keep alive script for bot
//pings the website address each 5 minutes
if(placeholder.env == "prod"){

  // import all libraries
  const http = require('http');
  const express = require('express');
  const app = express();

  // respond to http request with status 200
  app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
  });

  // send ping to itself each 5 minutes
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
}
// end of keep alive script //