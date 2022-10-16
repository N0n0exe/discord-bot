const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const nono = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const config = require("./config")


nono.commands = new Discord.Collection()


nono.login(process.env.TOKEN);
loadCommands(nono)
loadEvents(nono)
