const Discord = require('discord.js');
const client = new Discord.Client();

function cEmbed(channel, role) {
    let str = `Le role **${role.name}** à bien été ajouté !`;
    let embed = new Discord.RichEmbed()
      .setColor(0x42f44b)
      .setDescription(str.replace(':diamonds:', '\:diamonds:'));
    channel.send(embed);
};

function aEmbed(channel, role) {
    let str = `Tu à déja le role **${role.name}** !`;
    let embed = new Discord.RichEmbed()
      .setColor(0x42f44b)
      .setDescription(str.replace(':diamonds:', '\:diamonds:'));
    channel.send(embed);
};

client.on('message', message => {
    let channel = message.channel;
    if(message.content.startsWith('!mc')) {
        let role = message.guild.roles.find('name', '♦ Minecraft ♦');
        if (message.guild.member(message.author).roles.array().includes(role)) {
            aEmbed(channel, role);
            return;
        }
        message.guild.member(message.author).addRole(role);
        cEmbed(channel, role);
    }
    if(message.content.startsWith('!dst')) {
        let role = message.guild.roles.find('name', '♦ Don\'t Starve ♦');
        if (message.guild.member(message.author).roles.array().includes(role)) {
            aEmbed(channel, role);
            return;
        }
        message.guild.member(message.author).addRole(role);
        cEmbed(channel, role);
    }
    if(message.content.startsWith('!wot')) {
        let role = message.guild.roles.find('name', '♦ World of Tanks ♦');
        if (message.guild.member(message.author).roles.array().includes(role)) {
            aEmbed(channel, role);
            return;
        }
        message.guild.member(message.author).addRole(role);
        cEmbed(channel, role);
    }
    if(message.content.startsWith('!lol')) {
        let role = message.guild.roles.find('name', '♦ League of Legends ♦');
        if (message.guild.member(message.author).roles.array().includes(role)) {
            aEmbed(channel, role);
            return;
        }
        message.guild.member(message.author).addRole(role);
        cEmbed(channel, role);
    }
    if(message.content.startsWith('!osu')) {
        let role = message.guild.roles.find('name', '♦ Osu! ♦');
        if (message.guild.member(message.author).roles.array().includes(role)) {
            aEmbed(channel, role);
            return;
        }
        message.guild.member(message.author).addRole(role);
        cEmbed(channel, role);
    }
    if(message.content.startsWith('!els')) {
        let role = message.guild.roles.find('name', '♦ Elsword ♦');
        if (message.guild.member(message.author).roles.array().includes(role)) {
            aEmbed(channel, role);
            return;
        }
        message.guild.member(message.author).addRole(role);
        cEmbed(channel, role);
    }
})
client.on('guildMemberAdd', member => {
    let role = member.guild.roles.find('name', '♦ Membre ♦');
    let rolep = member.guild.roles.find('name', '♦ Perm - Membre ♦');
    member.addRole(role);
    member.addRole(rolep);
});

client.login(process.env.TOKEN);