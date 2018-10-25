const config = require('../config.json');
exports.run = (client, message, args) => {
    if(message.author.id != config.ownerID) return;
    if(message.guild.id != config.guildId) return;
    // do something
}