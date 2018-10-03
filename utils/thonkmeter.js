exports.run = (value, max) => {
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