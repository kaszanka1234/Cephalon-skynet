var config = require('../config.json');
exports.run = (damageType) => {
	var icons = {impact:"<:aImpact:497121355276222474>", slash:"<:aSlash:497121355070963713>",puncture:"<:aPuncture:497121355255250984>",heat:"<:aHeat:497121354949328908>",electricity:"<:aElectricity:497121354810916865>",toxin:"<:aToxin:497121355259445256>",cold:"<:aCold:497121355729338368>",radiation:"<:aRadiation:497121355280416779>",corrosive:"<:aCorrosive:497121355213307925>",magnetic:"<:aMagnetic:497121355276222464>",gas:"<:aGas:497121355637063701>",viral:"<:aViral:497121355469160458>",blast:"<:aBlast:497121355238473740>"};
	
	if(icons[damageType] != undefined){
		return icons[damageType];
	}else{
		return damageType
	}
}