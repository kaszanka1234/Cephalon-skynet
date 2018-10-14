var config = require('../config.json');
exports.run = (client, message, args) => {
  if(message.guild === null) return;
  if (message.author.id != config.ownerID) return;
  if (args.length < 1) return;
  var text = "";
  args.forEach(function(arg){
    text+=" "+arg;
  });
	message.delete(message.id).then(msg =>{
    message.channel.send(text);});
	/*
	if(args.length !=1){
		message.channel.send('Not enough arguments ni:b::b:a');
	}else{
		message.channel.send(args[0]);
	}
	*/
}