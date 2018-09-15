const https = require('https');

exports.run = (client, message, args) => {
  https.get('https://api.warframestat.us/pc/cetusCycle', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    var day = JSON.parse(data).isDay;
    if(day){
      day = "**DAY**";
    }else{
      day = "**NIGHT**";
    }
    message.channel.send(day+"\nTime Left: "+JSON.parse(data).timeLeft);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
  
}

