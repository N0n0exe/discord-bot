const Discord = require("discord.js")
const { EmbedBuilder, MessageActivityType } = require('discord.js');

module.exports = {

    name: "moche",
    description: "Permet de savoir à combien de % tu est moche",
    permission: "Aucune",
    dm: true,

    async run(nono, message, args, members, bot)  {    
      
            const amount = Math.floor(Math.random() * 100) + 1;
      
            const embed = new EmbedBuilder()
            .setTitle(`** ${message.user === undefined ? message.author.tag : message.user.tag} est moche a ${amount}% **`)
            .setColor("0101DF")
            return message.reply({embeds: [embed]}); 
    }
}