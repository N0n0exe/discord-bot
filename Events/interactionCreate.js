const Discord = require("discord.js")
const transcript = require("discord-html-transcripts")
const { EmbedBuilder, TextInputBuilder, ModalBuilder, ActionRowBuilder, TextInputStyle, SelectMenuBuilder, ChannelType, ButtonBuilder, ButtonStyle, createTranscript } = require("discord.js")


module.exports = async (nono, interaction) => {
    

    if(interaction.type === Discord.InteractionType.ApplicationCommand) {

        let command = require(`../Commandes/${interaction.commandName}`)
        command.run(nono, interaction, interaction.options)

        
    }
    if(interaction.isButton()) {
      if(interaction.customId === "close") {
        let EmbedPermissionClose = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`❌ Vous n'avez pas la permission requise !`)
 
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) return interaction.reply({embeds: [EmbedPermissionClose], ephemeral: true})
 
        let EmbedCloseTicket = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`Êtes-vous sûr de vouloir fermer le ticket ?`)
        let Button = new ActionRowBuilder()
        .addComponents(new ButtonBuilder()
          .setCustomId('oui')
          .setLabel("Oui")
          .setStyle(ButtonStyle.Success),
          new ButtonBuilder()
          .setCustomId('non')
          .setLabel("Non")
          .setStyle(ButtonStyle.Danger),
        );
        await interaction.reply({embeds: [EmbedCloseTicket], components: [Button]});
      }
      else if(interaction.customId === "oui") {
        let EmbedPermissionClose = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`❌ Vous n'avez pas la permission requise !`)
 
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) return interaction.reply({embeds: [EmbedPermissionClose], ephemeral: true})
 
        interaction.channel.delete();
      }
      else if(interaction.customId === "non") {
        let EmbedPermissionClose = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`❌ Vous n'avez pas la permission requise !`)
 
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) return interaction.reply({embeds: [EmbedPermissionClose], ephemeral: true})
 
        interaction.message.delete()
      }
      else if(interaction.customId === "transcript") {
 
        let EmbedSendTranscript = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`✅ Transcript envoyé avec succès !`)
        let EmbedTranscript = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`📑 Transcript de ${interaction.message.embeds[0].description.split(" ")[0]}`)
        let EmbedPermissionTranscript = new EmbedBuilder()
        .setColor("#FF0000")
        .setDescription(`❌ Vous n'avez pas la permission requise !`)
 
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) return interaction.reply({embeds: [EmbedPermissionTranscript], ephemeral: true})
 
        await interaction.deferReply({ ephemeral: true })
        await nono.channels.cache.get("1031222521489539112").send( {embeds: [EmbedTranscript], files: [await transcript.createTranscript(interaction.channel)]})
        await interaction.editReply({embeds: [EmbedSendTranscript], ephemeral: true})
      }
    }
 
  if(interaction.isSelectMenu()) {
      if(interaction.customId === 'menuticket') {
        if(interaction.values == 'Questions','Plainte','Bug','Entreprise','Achat') {
          const EmbedTicket1 = new EmbedBuilder()
          .setColor("#FF0000")
          .setTitle(`Comment créer un ticket ?`)
          .setDescription(`Pour **Ouvrir** un **Ticket** Séléctionnez la **catégorie** qui vous convient`)
          .setImage('https://share.creavite.co/0kcUeXNa4tuL7TDa.gif')
          .setTimestamp()
          .setFooter({ text: `${nono.user.username}`, iconURL: nono.user.displayAvatarURL({dynamic: true}) });
 
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
          await interaction.deferUpdate();
          await interaction.editReply({embeds: [EmbedTicket1], components: [RowTicket]})
 
          let channel = await interaction.guild.channels.create({
          parent: "1031237173233594408",
          name: `${interaction.values}-${interaction.user.username}`,
          type: ChannelType.GuildText,
          permissionOverwrites: [
            {
              id: interaction.guild.roles.everyone,
              deny: [Discord.PermissionFlagsBits.ViewChannel],
            },
            {
              id: interaction.user,
              allow: [Discord.PermissionFlagsBits.SendMessages, Discord.PermissionFlagsBits.ViewChannel],
            },
          ],
          });
          let EmbedCreateChannel = new EmbedBuilder()
          .setColor("#FF0000")
          .setTitle('Ticket ouvert')
          .setDescription("<@" + interaction.user.id + "> Voici votre ticket.\nExpliquez-nous en détail votre problème !")
          .setTimestamp()
          .setFooter({ text: `${nono.user.username}`, iconURL: nono.user.displayAvatarURL({dynamic: true}) });
          const Row = new ActionRowBuilder()
                .addComponents(new ButtonBuilder()
            .setCustomId('close')
            .setLabel('Fermer le ticket')
            .setEmoji('🗑️')
            .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
            .setCustomId('transcript')
            .setLabel('Demander le transcript')
            .setEmoji('📑')
            .setStyle(ButtonStyle.Primary),
              );
 
 
          await channel.send({embeds: [EmbedCreateChannel], components: [Row]})
 
          const EmbedSuccessCreateChannel = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`✅ Votre salon a été créé avec succès ${channel} !`)
 
 
          await interaction.followUp({embeds: [EmbedSuccessCreateChannel], ephemeral: true})
        }
      }
        } 
    }





