var config = require('../config.json');
exports.run = (client, message, args) => {
  if(message.guild === null) return;
	message.delete(message.id);
  if (message.author.id != config.ownerID) return;
  if (args.length < 1) return;
  var text = "";
  args.forEach(function(arg){
    text+=" "+arg;
  });
  client.channels.get("434384554091085832").send(text);
	/*
	if(args.length !=1){
		message.channel.send('Not enough arguments ni:b::b:a');
	}else{
		message.channel.send(args[0]);
	}
	*/
}