const Discord = require("discord.js")

module.exports = {

    name: "unban",
    description: "Unban un membre",
    permission: Discord.PermissionFlagsBits.BanMembers,
    dm: false,
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre a unban",
            required: true
        },{
            type: "string",
            name: "raison",
            description: "La raison du débannissement",
            required: false
        }
    ],

    async run(nono, message, args) {

        try {

            let member = args.getUser("membre")
            if(member &&!member) return message.reply("Pas de membre !")

            let reason =  args.getStirng("raison")
            if(!reason) reason = "Pas de raison fournie.";

            if((await message.guild.bans.fetch().get(user.id).size <= 0)) return message.reply("Ce membre n'est pas banni !")

            try {await user.send(`Tu a été unban par ${message.user.tag} pour la raison : \`${reason}\``)} catch (err) {}

            await message.reply(`${message.user} a unban ${user.tag} pour la raison : \`${reason}\``)
            
            await message.guild.members.unban(user, reason)

        } catch (err) {

            return message.reply("Pas de Membre !")
        }
    }
}