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



client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('472875486700240906');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online [ ${currentSize} ]`);
  if (currentSize !== size) channel.setName(`Voice Online [ ${currentSize} ]`);
});

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});
 
 
 var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
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


  client.on('message', message => {//By Codes , ' ّEpicEdiTeDّ#4968
              if(!message.channel.guild) return;//By Codes , ' ّEpicEdiTeDّ#4968
    var prefix = "*";//By Codes , ' ّEpicEdiTeDّ#4968
    if(message.content.startsWith('*bc')) {//By Codes , ' ّEpicEdiTeDّ#4968
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للإدارة**').then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية لاستعمال هاذا الأمر** //By Codes , ' ّEpicEdiTeDّ#4968`ADMINISTRATOR`' );//By Codes , ' ّEpicEdiTeDّ#4968
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);//By Codes , ' ّEpicEdiTeDّ#4968
    let copy = "S Bot";//By Codes , ' ّEpicEdiTeDّ#4968
    let request = `Requested By ${message.author.username}`;//By Codes , ' ّEpicEdiTeDّ#4968
    if (!args) return message.reply('**يجب عليك كتابة شيئ لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من الإرسال؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {//By Codes , ' ّEpicEdiTeDّ#4968
    msg.react('✅')//By Codes , ' ّEpicEdiTeDّ#4968
    .then(() => msg.react('❌'))//By Codes , ' ّEpicEdiTeDّ#4968
    .then(() =>msg.react('✅'))//By Codes , ' ّEpicEdiTeDّ#4968
 
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;//By Codes , ' ّEpicEdiTeDّ#4968
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//By Codes , ' ّEpicEdiTeDّ#4968
          let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });//By Codes , ' ّEpicEdiTeDّ#4968
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });//By Codes , ' ّEpicEdiTeDّ#4968
    reaction1.on("collect", r => {//By Codes , ' ّEpicEdiTeDّ#4968
    message.channel.send(`**☑ |   لقد تم ارسال الرسالة لـ ${message.guild.members.size} عضوآ**`).then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968
    message.guild.members.forEach(m => {//By Codes , ' ّEpicEdiTeDّ#4968
    var bc = new//By Codes , ' ّEpicEdiTeDّ#4968
       Discord.RichEmbed()//By Codes , ' ّEpicEdiTeDّ#4968
       .setColor('RANDOM')//By Codes , ' ّEpicEdiTeDّ#4968
       .setDescription(`البرودكاست :mega:
**:shield: السيرفر : ** ${message.guild.name}
** :thinking:  المرسل : ** ${message.author.username}
**  الرسالة : ** ${args}
 
 
 
 
        `)//By Codes , ' ّEpicEdiTeDّ#4968
         .setTimestamp()//By Codes , ' ّEpicEdiTeDّ#4968
         .setFooter('S Bot' , 'https://cdn.discordapp.com/avatars/465885551329804288/55614337cfb9813916a60383469736d9.jpg?size=128')
    m.send({ embed: bc })
    msg.delete();//By Codes , ' ّEpicEdiTeDّ#4968
    })//By Codes , ' ّEpicEdiTeDّ#4968
    })//By Codes , ' ّEpicEdiTeDّ#4968
    reaction2.on("collect", r => {//By Codes , ' ّEpicEdiTeDّ#4968
    message.channel.send(`**تم الغاء البرودكاست :x:.**`).then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968//By Codes , msg.delete();//By Codes , ' ّEpicEdiTeDّ#496
    })
    })//By Codes , ' ّEpicEdiTeDّ#4968
    }
    });//By Codes , ' ّEpicEdiTeDّ#4968//By Codes , ' ّEpicEdiTeDّ#4968
 
//By Codes , ' ّEpicEdiTeDّ#4968




client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`Bot ON ${client.guilds.size} Servers`,`In Server ${client.users.size} Users`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);

});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر منور :heart:`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter('GhostGamers', 'https://images-ext-2.discordapp.net/external/isSXO_JfjdAVla24z1lzOgnoiCHzALglHXEZ70kmMvk/https/cdn.pg.sa/OD53Wjr9p0.gif')

var channel =member.guild.channels.find('name', 'public-chat')
if (!channel) return;
channel.send({embed : embed});
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "~say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login(process.env.BOT_TOKEN);
