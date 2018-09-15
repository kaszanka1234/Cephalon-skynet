exports.run = (client, message, args) => {
  if(message.guild === null) return;
	message.delete(message.id);
  if (message.author.id != "333769079569776642") return;
	/*
  if(args.length < 1) return;
	var text = "";
  args.forEach(function(arg){
    text+=" "+arg;
  });
  client.users.get("").send(text);
	*/
}