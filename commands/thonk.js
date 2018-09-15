exports.run = (client, message, args) => {
  if(message.guild === null) return;
	//if(message.member.roles.some(r=>["Warlord", "General", "Officer"].includes(r.name))){
  message.delete(message.id);
	message.channel.send('\
	⠰⡿⠿⠛⠛⠻⠿⣷\n\
⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀\n\
⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷\n\
⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇\n\
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁\n\
\n\
⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀\n\
⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗\n\
⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄\n\
⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃\n\
⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄\n\
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁\n\
⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁\n\
⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟\n\
⠀⠀⠀⠀⠀⠉⠉⠉\n\
	');
//	}else{
//		message.channel.send("Insufficent permission :thinking:");
//	}
}