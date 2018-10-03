var config = require('../config.json');
exports.run = (damageTypesObject) => {
	var damageTypes = new Array();
	
	if(damageTypesObject['impact'] != undefined){
		damageTypes.push(['impact', (Math.floor(damageTypesObject['impact']*10)/10).toString()]);
	}
	if(damageTypesObject['puncture'] != undefined){
		damageTypes.push(['puncture', (Math.floor(damageTypesObject['puncture']*10)/10).toString()]);
	}
	if(damageTypesObject['slash'] != undefined){
		damageTypes.push(['slash', (Math.floor(damageTypesObject['slash']*10)/10).toString()]);
	}
	if(damageTypesObject['cold'] != undefined){
		damageTypes.push(['cold', (Math.floor(damageTypesObject['cold']*10)/10).toString()]);
	}
	if(damageTypesObject['electricty'] != undefined){
		damageTypes.push(['electricty', (Math.floor(damageTypesObject['electricty']*10)/10).toString()]);
	}
	if(damageTypesObject['heat'] != undefined){
		damageTypes.push(['heat', (Math.floor(damageTypesObject['heat']*10)/10).toString()]);
	}
	if(damageTypesObject['toxin'] != undefined){
		damageTypes.push(['toxin', (Math.floor(damageTypesObject['toxin']*10)/10).toString()]);
	}
	if(damageTypesObject['blast'] != undefined){
		damageTypes.push(['blast', (Math.floor(damageTypesObject['blast']*10)/10).toString()]);
	}
	if(damageTypesObject['corrosive'] != undefined){
		damageTypes.push(['corrosive', (Math.floor(damageTypesObject['corrosive']*10)/10).toString()]);
	}
	if(damageTypesObject['gas'] != undefined){
		damageTypes.push(['gas', (Math.floor(damageTypesObject['gas']*10)/10).toString()]);
	}
	if(damageTypesObject['magnetic'] != undefined){
		damageTypes.push(['magnetic', (Math.floor(damageTypesObject['magnetic']*10)/10).toString()]);
	}
	if(damageTypesObject['radiation'] != undefined){
		damageTypes.push(['radiation', (Math.floor(damageTypesObject['radiation']*10)/10).toString()]);
	}
	if(damageTypesObject['viral'] != undefined){
		damageTypes.push(['viral', (Math.floor(damageTypesObject['viral']*10)/10).toString()]);
	}
	
	return damageTypes;
}