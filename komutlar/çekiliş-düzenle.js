const Discord = require("discord.js")
const ms = require("ms")
const path = require("path")
exports.run = async (client, message, args) => {

    if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RANDOM")
          .setDescription(
            "<:codesty_support:844468556430704640> Lütfen bir çekiliş ID giriniz!" 
            ) 
          .setTimestamp()
      );
    }

        if (!args[1]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RANDOM")
          .setDescription(
            "<:codesty_support:844468556430704640> Lütfen çekilişin süresini girin.\n\n**Kullanımı:** \n **Saniye: s \n Dakika: m \n Saat: h \n Gün: d**"
          )
          .setTimestamp()
      );
    }

    if (!args[2]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RANDOM")
          .setDescription(
            "<:codesty_support:844468556430704640> Lütfen yeni kazanan sayısı girin." 
           )
          .setTimestamp()
      );
    }

    if (!args[3]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RANDOM")
          .setDescription(
            "<:codesty_support:844468556430704640> Lütfen yeni çekiliş ismi girin."
          )
          .setTimestamp()
      );
    }

        client.giveawaysManager.edit(args[0], {
            addTime: ms(args[1]),
            newWinnerCount: parseInt(args[2]),
            newPrize: args.slice(3).join(" ")
        }).then(() => {
            // Here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send(':tada: Tamam! Çekiliş düzenlendi!');
        }).catch((err) => {
            message.channel.send('<:bakimda:798582408642560110> ' + args[0] + ', ID li çekiliş bulunamadı!');
        });
}
exports.conf = {
aliases: [] 
}
exports.help = {
name: "çekiliş-düzenle" 
} 
