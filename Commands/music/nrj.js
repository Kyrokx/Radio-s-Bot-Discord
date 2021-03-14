const Discord = require('discord.js')

module.exports = {
    name: 'nrj',
    aliases: [],
    category: 'music',

    async do_run(client, message) {
        if (!message.guild) return;

        if (!message.member.voice.channel) {
            message.reply(`${client.config.EMOJI.ERROR} - Please connect to a voice lounge !`)
        } else {
            const connection = await message.member.voice.channel.join()
            const dispatcher = connection.play(client.config.RADIO.NRJ);
            embed = new Discord.MessageEmbed()
            .setColor(client.config.COLOR.GREEN)
            .setDescription(` 💿 - Nrj radio is being played... `)
            message.channel.send({embed})
        }
    }
}
