var config = require('../config.json');
delete require.cache[require.resolve(`../utils/mySQL.js`)];
const sql = require('../utils/mySQL.js');

exports.run = (client, message, args) => {
  if(message.guild === null) return;
	message.delete(message.id);
  if (message.author.id != config.ownerID) return;
  /*
  var asd = 'hmmm';

  let conf = sql.retriveConfig(message.guild.id);
  conf.then((result) => {
    config = result;
  });

  console.log(asd);
  /* command access modifiers
  * 1/0 warlord
  * 1/0 general
  * 1/0 officer
  * 1/0 sergeant
  * 1/0 soldier
  * 1/0 initiate
  * 1/0 guest
  * 1/0 unused
  */
  /*con.query(sql, function(err, result){
    if(err){
      console.log(err);
      return;
    }
    console.log("success");
  });*/
}