const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if(message.content.startsWith('!mc')) {
        let role = message.guild.roles.find('name', '♦ Minecraft ♦').id;
        if (message.guild.member(message.author).roles.array().includes(role)) {
            message.channel.send(`Tu à déja ce role !`)
            return;
        }
        message.guild.member(message.author).addRole(role);
    }
    if(message.content.startsWith('!dst')) {
        let role = message.guild.roles.find('name', '♦ Don\'t Starve ♦').id;
        if (message.guild.member(message.author).roles.array().includes(role)) {
            message.channel.send(`Tu à déja ce role !`)
            return;
        }
        message.guild.member(message.author).addRole(role);
    }
    if(message.content.startsWith('!wot')) {
        let role = message.guild.roles.find('name', '♦ World of Tanks ♦').id;
        if (message.guild.member(message.author).roles.array().includes(role)) {
            message.channel.send(`Tu à déja ce role !`)
            return;
        }
        message.guild.member(message.author).addRole(role);
    }
    if(message.content.startsWith('!lol')) {
        let role = message.guild.roles.find('name', '♦ League of Legends ♦').id;
        if (message.guild.member(message.author).roles.array().includes(role)) {
            message.channel.send(`Tu à déja ce role !`)
            return;
        }
        message.guild.member(message.author).addRole(role);
    }
    if(message.content.startsWith('!osu')) {
        let role = message.guild.roles.find('name', '♦ Osu! ♦').id;
        if (message.guild.member(message.author).roles.array().includes(role)) {
            message.channel.send(`Tu à déja ce role !`)
            return;
        }
        message.guild.member(message.author).addRole(role);
    }
    if(message.content.startsWith('!els')) {
        let role = message.guild.roles.find('name', '♦ Elsword ♦').id;
        if (message.guild.member(message.author).roles.array().includes(role)) {
            message.channel.send(`Tu à déja ce role !`)
            return;
        }
        message.guild.member(message.author).addRole(role);
    }
})
client.on('guildMemberAdd', member => {
    let role = member.guild.roles.find('name', '♦ Membre ♦');
    let rolep = member.guild.roles.find('name', '♦ Perm - Membre ♦');
    member.addRole(role);
    membed.addRole(rolep);
});

client.login(process.env.TOKEN);