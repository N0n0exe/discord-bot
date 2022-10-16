const Discord = require("discord.js")
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "say",
    description: "Permet de faire un message avec le bot",
    permission: "Aucune",
    dm: false,
    options: [
        {
            type: "string",
            name: "saymess",
            description: "Message",
            required: true
        }
    ],
    async run(nono, message, args) {


        let Err_ = new EmbedBuilder()
        .setColor(`#0101DF`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTitle("**Une erreur est survenu **")
        .addFields({name: `**__Détail de l'erreur __** `, value: `> Aucun message donnée  `})
        .setTimestamp()

        try {
            let saymessage = args.get("saymess").value;
            if(!saymessage) return message.reply({ embeds: [Err_] })
        
            let Say = new EmbedBuilder()
            .setColor(`#0101DF`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTitle("🌠 __**Détail Du Say**__")
             .addFields({name: `**Message** `, value:`** ${saymessage} **`})
            .setTimestamp()

                await message.reply({ embeds: [Say] })      
            
        } catch (err) {
            return message.reply({ embeds: [Err_] })
        }
    }
}