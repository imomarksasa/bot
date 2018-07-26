const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "برفكسك";
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

client.on('ready', () => {
  client.user.setGame(`Enjoy :)`,'https://www.twitch.tv/v5bz');
});

client.login(process.env.BOT_TOKEN);
