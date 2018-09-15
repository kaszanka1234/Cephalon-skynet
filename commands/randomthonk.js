exports.run = (client, message, args) => {

  let thonk = require('../utils/randomthonk.js');
  if(message.guild === null){
  } else{
    //message.delete(message.id);
  }
  message.channel.send(thonk.run());
}