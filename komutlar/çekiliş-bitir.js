const ms = require('ms');

const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 if(!message.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`**Ne yazık ki bu komutu kullanmaya yetkin yok. <:bakimda:798582408642560110>**`)

    message.channel.send(embed);

    return;

  }

    if(!args[0]){

        return message.inlineReply('<:bakimda:798582408642560110> Bir çekiliş **kimliği** belirtmelisin! \n Örnek: g.bitir (çekiliş ıd)');

    }

    let giveaway = 

    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||

    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){

        return message.inlineReply('<:bakimda:798582408642560110> Sunucuda böyle bir çekiliş **bulamadım!** `'+ args.join(' ') + '`.');

    }

    client.giveawaysManager.edit(giveaway.messageID, {

        setEndTimestamp: Date.now()

    })

    .then(() => {

        message.inlineReply('<:calisiyor:798582407393312808> Çekiliş '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' saniye içinde sonlandırılacak!!')

    })

    .catch((e) => {

        if(e.startsWith(`<:bakimda:798582408642560110> bu ID çekiliş kimliği ${giveaway.messageID} zaten bitti.`)){

            message.inlineReply('<:bakimda:798582408642560110> Bu çekiliş çoktan sona erdi!');

        } else {

            console.error(e);

            message.inlineReply('Bir hata oluştu...');

        }

    });

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['zjskkc'],

  permLevel: 0

};

exports.help = {

  name: 'çekiliş-bitir',

  description: 'çekiliş',

  usage: 'bitir'

};
