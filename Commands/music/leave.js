const Discord = require('discord.js')

module.exports = {
    name: 'stop',
    aliases: ["leave", "dc"],
    category: 'music',

    async do_run(client, message) {
        if (!message.guild) return;
        if (!message.member.voice.channel) return message.channel.send(`${client.config.EMOJI.ERROR} - You're not in a voice lounge !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.config.EMOJI.WARN} - You're not in the same voice lounge as me !`);

        message.channel.send(`${client.config.EMOJI.YES} - The radio stopped!`);
        message.guild.me.voice.channel.leave()

    }
}



