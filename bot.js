const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "*";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("359674601392832512");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
 
 
 
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("471393414395461634");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("359674601392832512");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;        
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});

  client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('>bcall')){
 if (message.author.id !== '321476121956974595') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '321476121956974595') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



client.on('ready', () => {
  client.user.setGame(`Enjoy :)`,'https://www.twitch.tv/v5bz');
});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر منور :heart:`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter('GhostGamers', 'https://cdn.discordapp.com/attachments/437020575463112705/437944895316164610/image.png')

var channel =member.guild.channels.find('name', 'public-chat')
if (!channel) return;
channel.send({embed : embed});
});

client.login(process.env.BOT_TOKEN);
