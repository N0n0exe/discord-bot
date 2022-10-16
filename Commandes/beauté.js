const Discord = require("discord.js")
const { EmbedBuilder, MessageActivityType } = require('discord.js');

module.exports = {

    name: "beauté",
    description: "Permet de savoir à combien de % tu est beau ou belle",
    permission: "Aucune",
    dm: true,

    async run(nono, message, args, members, bot)  {    
      
            const amount = Math.floor(Math.random() * 100) + 1;
      
            const embed = new EmbedBuilder()
            .setTitle(`** ${message.user === undefined ? message.author.tag : message.user.tag} est beau ou belle de ${amount}% **`)
            .setColor("0101DF")
            return message.reply({embeds: [embed]}); 
    }
}