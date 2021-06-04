const Discord = require("discord.js");
const ms = require("ms");
const path = require("path");

module.exports.run = async (client, message, args) => {
  
  let hasPerm = message.member.hasPermission("MANAGE_MESSAGES");
  let hasRole = message.member.roles.cache.find(r => r.name === "Giveaways");

    if (hasPerm === false || !hasRole == null)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RED")
          .setDescription(
            "Bu komutu kullanmak için `MANAGE_MESSAGES` yetkisine ihtiyacınız var."
          )
          .setTimestamp()
      );

    if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RED")
          .setDescription(
            "Lütfen, yeniden çekmek istediğiniz çekiliş ID sini giriniz \n Örnek (g.yeniden-çek (çekiliş mesajı nın ıd si))"
          )
          .setTimestamp()
      );
    }
        client.giveawaysManager.reroll(args[0], {
      messages: {
        congrat: "🎁 Tebrikler: {winners}"
      }
    });
};

module.exports.help = {
  name: "çekiliş-yeniden-çek"
};
