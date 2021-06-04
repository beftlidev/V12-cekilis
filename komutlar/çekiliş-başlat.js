const Discord = require("discord.js");
const ms = require("ms");
const path = require("path");

module.exports.run = async (client, message, args) => {
  
  let hasPerm = message.member.hasPermission("MANAGE_MESSAGES");
  let hasRole = message.member.roles.cache.find(r => r.name === "Giveaways");

    if (hasPerm === false || !hasRole == null) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**__HATA__**")
          .setColor("RED")
          .setDescription(
            "Bu komutu kullanmak için `MANAGE_MESSAGES` izinlerine ihtiyacınız var."
          )
          .setTimestamp()
      );
    }

    if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RANDOM")
          .setDescription(
            "Lütfen çekilişin süresini girin.\n\n**Kullanımı:** \n **Saniye: s \n Dakika: m \n Saat: h \n Gün: d** \n \n **1.Adım:** g.başlat <süre>"
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
            "Lütfen çekilişi kazanacak sayısını girin \n **Örnek:** 1 \n \n **2.Adım:** g.başlat <süre> <kazanacak(lar)>"
          )
          .setTimestamp()
      );
    }

    if (!args[2]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RANDOM")
          .setDescription("Lütfen Yapacağınız Çekilişi yazınız. \n \n **3.Adım:** g.başlat <süre> <kazanacak(lar)> <Çekiliş>")
          .setTimestamp()
      );
    }

    message.delete();

    client.giveawaysManager.start(message.channel, {
      time: ms(args[0]),
      prize: args.slice(2).join(" "),
      winnerCount: parseInt(args[1]),
      messages: {
        giveaway:
          "<:SpaceGiveaway:798525686142468136> **Çekiliş Başladı** <:SpaceGiveaway:798525686142468136>",
        giveawayEnded:
          "<:SpaceGiveaway:798525686142468136> **Çekiliş Bitti** <:SpaceGiveaway:798525686142468136>",
        timeRemaining: `\n\Kalan Süre: **{duration}**!\n\Çekilişi Yapan: ${
          message.author
        }`,
        inviteToParticipate: "<a:bytcec:818712678146113567> Çekilişe katılmak için 🎉 tepkisine tıklayın!",
        winMessage: "🎉 Tebrikler, {winners}! **{prize}** kazandın!",
        embedFooter: " Çekiliş",
        noWinner: `\Yeterli katılım olmadığı için çekiliş iptal edildi.\n\Çekilişi Yapan: ${message.author}`,
        winners: `\Kazanan(lar) `,
        endedAt: "Bitiş",
        units: {
          seconds: "Saniye",
          minutes: "Dakika",
          hours: "Saat",
          days: "Gün",
          pluralS: false
        }
      }
    });

    client.giveawaysManager.on("giveawayRerolled", (giveaway, winners) => {
      winners.forEach(member => {
        member.send(
          "**Çekiliş kazanan yeniden çekildi!:** **Tebrikler**, " +
            member.user.username +
            ", " +
            giveaway.prize +
            " Kazandın"
        );
      });
    });

};

module.exports.help = {
  name: "başlat"
};
