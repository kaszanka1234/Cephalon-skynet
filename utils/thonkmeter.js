var config = require('../config.json');
exports.run = (value, max) => {

  // return a thonk representation of numerical vaule
  // eg. 2 out of 5 will return 2 thonks and 3 gray thonks
  var stateON = "<:thonk:453599203701293056>";
  var stateOFF = "<:gray_thonk:491331837776625664>";
  var meter = "";
  
  for(var i=0;i<max;i++){
    if(i<value){
      meter += stateON;
    }else{
      meter += stateOFF;
    }
  }
  return meter;
}