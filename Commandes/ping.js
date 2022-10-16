const Discord = require("discord.js")

module.exports = {

    name: "ping",
    description: "Affiche la latence",
    permission: "Aucune",
    dm: true,

    async run(nono, message, args) {

        await message.reply(`Ping : \`${nono.ws.ping}\``)
    }
}