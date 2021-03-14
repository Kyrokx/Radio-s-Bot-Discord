'use strict'
const Discord = require('discord.js')
const client = new Discord.Client()
const {readdirSync} = require('fs')

client.config = require('./config')

const init = async () => {
        try {
            client.login(client.config.TOKEN)
            console.log("The bot's token is passed and it will connect to Discord!")
        } catch (error) {
            throw error("The bot token is Invalid, it will not connect to Discord!")
        }
    

        client.commands = new Discord.Collection();
        readdirSync('./Commands').forEach(dirs => {
            const commands = readdirSync(`./Commands/${dirs}`).filter(files => files.endsWith('.js'));

            for (const file of commands) {
                const command = require(`./Commands/${dirs}/${file}`);
                console.log(`The command has been loaded : ${file}`);
                client.commands.set(command.name.toLowerCase(), command)
            };
        });

        const evtFiles = readdirSync('./Events');
        for (const file of evtFiles) {
            console.log(`Loading Discord.js event : ${file} `)
            const event = require(`./Events/${file}`)
            client.on(file.split(".")[0], event.bind(null, client))
        }
}

init()