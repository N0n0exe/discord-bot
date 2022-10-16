const Discord = require("discord.js")
const loadSlashCommands = require("../Loaders/loadSlashCommands")

module.exports = async nono => {

    await loadSlashCommands(nono)


    console.log(`${nono.user.tag} est bien en ligne !`)
}