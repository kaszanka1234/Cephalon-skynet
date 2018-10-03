var config = require('../config.json');
exports.run = (damageTypesObject) => {
	var damageTypes = new Array();
	
	if(damageTypesObject['impact'] != undefined){
		damageTypes.push(['impact', (Math.round(damageTypesObject['impact']*10)/10).toString()]);
	}
	if(damageTypesObject['puncture'] != undefined){
		damageTypes.push(['puncture', (Math.round(damageTypesObject['puncture']*10)/10).toString()]);
	}
	if(damageTypesObject['slash'] != undefined){
		damageTypes.push(['slash', (Math.round(damageTypesObject['slash']*10)/10).toString()]);
	}
	if(damageTypesObject['cold'] != undefined){
		damageTypes.push(['cold', (Math.round(damageTypesObject['cold']*10)/10).toString()]);
	}
	if(damageTypesObject['electricity'] != undefined){
		damageTypes.push(['electricity', (Math.round(damageTypesObject['electricity']*10)/10).toString()]);
	}
	if(damageTypesObject['heat'] != undefined){
		damageTypes.push(['heat', (Math.round(damageTypesObject['heat']*10)/10).toString()]);
	}
	if(damageTypesObject['toxin'] != undefined){
		damageTypes.push(['toxin', (Math.round(damageTypesObject['toxin']*10)/10).toString()]);
	}
	if(damageTypesObject['blast'] != undefined){
		damageTypes.push(['blast', (Math.round(damageTypesObject['blast']*10)/10).toString()]);
	}
	if(damageTypesObject['corrosive'] != undefined){
		damageTypes.push(['corrosive', (Math.round(damageTypesObject['corrosive']*10)/10).toString()]);
	}
	if(damageTypesObject['gas'] != undefined){
		damageTypes.push(['gas', (Math.round(damageTypesObject['gas']*10)/10).toString()]);
	}
	if(damageTypesObject['magnetic'] != undefined){
		damageTypes.push(['magnetic', (Math.round(damageTypesObject['magnetic']*10)/10).toString()]);
	}
	if(damageTypesObject['radiation'] != undefined){
		damageTypes.push(['radiation', (Math.round(damageTypesObject['radiation']*10)/10).toString()]);
	}
	if(damageTypesObject['viral'] != undefined){
		damageTypes.push(['viral', (Math.round(damageTypesObject['viral']*10)/10).toString()]);
	}
	
	return damageTypes;
}