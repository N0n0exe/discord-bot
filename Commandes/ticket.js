const Discord = require("discord.js")
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js")
 
module.exports = {
 
  name: "ticket",
  description: "Envoyer l'embed des tickets",
  permission:  Discord.PermissionFlagsBits.Administrator,
  dm: false,
 
  async run(nono, message, args) {
    const EmbedTicket = new EmbedBuilder()
    .setColor("#FF0000")
    .setDescription(`✅ L'embed des tickets à été envoyer avec succès !`)
 
    const EmbedTicket1 = new EmbedBuilder()
    .setColor("#FF0000")
    .setTitle(` créer un ticket :   `)
    .setDescription(`Pour **Ouvrir** un **Ticket** Séléctionnez la **catégorie** qui vous convient`)
    .setImage('https://share.creavite.co/0kcUeXNa4tuL7TDa.gif')
    .setTimestamp()
    .setFooter({ text: `${nono.user.username} |Equipe de support G5M`, iconURL: nono.user.displayAvatarURL({dynamic: true})  } );
 
    const RowTicket = new ActionRowBuilder()
            .addComponents(
      new SelectMenuBuilder()
      .setCustomId('menuticket')
      .setPlaceholder('Sélectionner le type de ticket que vous voulez !')
      .addOptions(
        {
            label: `Questions`,
            description: `Poser une question de tout type`,
            emoji: `❓`,
            value: `Questions`,
          },
          {
            label: `Plainte`,
            description: `Faire une plainte envers un staff ou un membre du Discord`,
            emoji: `🖋`,
            value: `Plainte`,
          },
          {
            label: `Bug`,
            description: `Signaler un bug`,
            emoji: `⚠`,
            value: `Bug`,
          },
          {
            label: `Entreprise`,
            description: `Reprendre une entreprise`,
            emoji: `📜`,
            value: `Entreprise`,
          },
          {
            label: `Achat Boutique`,
            description: `Faire un achat dans la boutique`,
            emoji: `💸`,
            value: `Achat`,
          },
      ),
    );
 
    await message.reply({embeds: [EmbedTicket], ephemeral: true})
    await message.channel.send({embeds: [EmbedTicket1], components: [RowTicket]})
  }
}
