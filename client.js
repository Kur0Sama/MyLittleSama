const Discord = require('discord.js');
const client = new Discord.Client();

function cEmbed(channel, role) {
    let str = `Le role **${role.name}** à bien été ajouté !`;
    let embed = new Discord.RichEmbed()
        .setColor(0x42f44b)
        .setDescription(str.replace('♦', '\♦'));
    channel.send(embed);
};

function aEmbed(channel, role) {
    let str = `Erreur, Tu à déja le role **${role.name}** !`;
    let embed = new Discord.RichEmbed()
        .setColor(0xf44141)
        .setDescription(str.replace('♦', '\♦'));
    channel.send(embed);
};

client.on('message', message => {
    let channel = message.channel;
    if (message.content.startsWith('!role')) {
        if (message.content[1].toLowerCase() == 'minecraft' || message.content[1].toLowerCase() == 'mc') {
            let role = message.guild.roles.find('name', '♦ Minecraft ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (message.content[1].toLowerCase() == 'dontstarve' || message.content[1].toLowerCase() == 'dst') {
            let role = message.guild.roles.find('name', '♦ Don\'t Starve ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (message.content[1].toLowerCase() == 'worldoftanks' || message.content[1].toLowerCase() == 'wot') {
            let role = message.guild.roles.find('name', '♦ World of Tanks ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (message.content[1].toLowerCase() == 'leagueoflegends' || message.content[1].toLowerCase() == 'lol') {
            let role = message.guild.roles.find('name', '♦ League of Legends ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (message.content[1].toLowerCase() == 'osu!' || message.content[1].toLowerCase() == 'osu') {
            let role = message.guild.roles.find('name', '♦ Osu! ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (message.content[1].toLowerCase() == 'elsword' || message.content[1].toLowerCase() == 'els') {
            let role = message.guild.roles.find('name', '♦ Elsword ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
    }
})
client.on('guildMemberAdd', member => {
    let role = member.guild.roles.find('name', '♦ Membre ♦');
    let rolep = member.guild.roles.find('name', '♦ Perm - Membre ♦');
    member.addRole(role);
    member.addRole(rolep);
});

client.login(process.env.TOKEN);