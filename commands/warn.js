const config = require('../config.json');
exports.run = (client, message, args) => {
    if(message.author.id != config.ownerID){
        message.channel.send('Insufficient permissions');
        return;
    }
    message.delete(message.id);
    if(args.length<2){
        message.channel.send("You have to specify at least 2 arguments");
        return;
    }
    let user = message.mentions.users;
    if(user.length>1){
        message.channel.send('You can only warn one user at once!');
        return;
    }
    user.forEach(u => {
        user = u;
    });
    /*if(!args[0].match(/(<@)\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d(>)/g)){
        message.channel.send('First argument has to be @user');
        return;
    }*/
    let msg = '';
    if(args[2] == undefined && (args[1]=='offline_initiate'||args[1]=='offline_soldier')){
        message.channel.send('You have to specify amount of days for these parameters\nwarn @user [reason] [days]');
        return;
    }
    switch(args[1]){
        case "disc_leave":
            msg = 'placeholder';
            break;
        case "offline_initiate":
            msg = ' has been offline for '+args[2]+' days as initiate, if this continues you will get kicked out of the clan';
            break;
        case 'offline_soldier':
            msg = ' has been offline for '+args[2]+' days, if this continues you will get kicked at day 30';
            break;
        case 'kick_offline':
            msg = ' has benn kicked out of the clan for being offline for too long.\nIf you want to rejoin later contact any sergeant or higher';
            break;
        default:
            msg = null;
            break;
    }
    if(msg===null){
        message.channel.send('incorrect reason\n\
correct reasons are "kick_offline", "offline_initiate [days]", "offline_soldier [days]"');
        return;
    }
    client.channels.get(config.channelAnnouncements).send('<@'+user.id+'>'+msg);
}