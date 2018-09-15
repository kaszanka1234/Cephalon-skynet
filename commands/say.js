exports.run = (client, message, args) => {
  if(message.guild === null) return;
	message.delete(message.id);
  if (message.author.id != "333769079569776642") {
    message.author.send("You can't use that command");
    return;
  }
  if (args.length < 1) return;
  var text = "";
  args.forEach(function(arg){
    text+=" "+arg;
  });
  message.channel.send(text);
	/*
	if(args.length !=1){
		message.channel.send('Not enough arguments ni:b::b:a');
	}else{
		message.channel.send(args[0]);
	}
	*/
}