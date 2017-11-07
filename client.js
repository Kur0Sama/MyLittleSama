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
    let prefix = '!';
    let channel = message.channel;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    if (command == prefix + 'role') {
        console.log('someone did !role')
        if (args[0] == 'minecraft' || args[0] == 'mc') {
            let role = message.guild.roles.find('name', '♦ Minecraft ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (args[0] == 'dontstarve' || args[0] == 'dst') {
            let role = message.guild.roles.find('name', '♦ Don\'t Starve ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (args[0] == 'worldoftanks' || args[0] == 'wot') {
            let role = message.guild.roles.find('name', '♦ World of Tanks ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (args[0] == 'leagueoflegends' || args[0] == 'lol') {
            let role = message.guild.roles.find('name', '♦ League of Legends ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (args[0] == 'osu!' || args[0] == 'osu') {
            let role = message.guild.roles.find('name', '♦ Osu! ♦');
            if (message.guild.member(message.author).roles.array().includes(role)) {
                aEmbed(channel, role);
                return;
            }
            message.guild.member(message.author).addRole(role);
            cEmbed(channel, role);
        }
        if (args[0] == 'elsword' || args[0] == 'els') {
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