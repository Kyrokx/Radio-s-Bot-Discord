const Discord = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ["aide", "h"],
    category: 'cmd',

    async do_run(client, message) {
        var prefix = client.config.PREFIX;
        var guilds = client.guilds.cache.size;
        var Apiping = client.ws.ping;
        var connection = client.voice.connections.size;

        let embed = new Discord.MessageEmbed()
        .setColor(client.config.COLOR.NONE)
        .setTitle(client.user.username, client.user.displayAvatarURL())
        .setDescription("π List of commands :\n")
        .addFields(
            { name: ` \`\`${prefix}help\`\``, value: " - Gives the list of commands", inline: false },
            { name: `\`\`${prefix}nrj\`\``, value: " - play nrj radio", inline: false },
            { name: `\`\`${prefix}skyrokx\`\``, value: " - play skyrock radio", inline: false },
            { name: `\`\`${prefix}leave\`\``, value: " - Quit the voice channel", inline: false },
            {name: "\`\`π\`\` Statistiques : ", value: `\nπ‘ Guilds \`\`${guilds}\`\` \n π Api Ping \`\`${Apiping}\`\` \n πΏ Connections \`\`${connection}\`\``,inline: false},
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(' Bot Open Source by Kyrokx( " γ΄γΌγ«γιηΊθ " )#7573  ')
        message.channel.send(embed)

    }

}
