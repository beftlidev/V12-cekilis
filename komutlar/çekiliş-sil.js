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
            " Lütfen silmemi istediğiniz bir çekiliş ID girin!" 
           ) 
          .setTimestamp()
      );
    }

        client.giveawaysManager.delete(args[0]).then(() => {
            message.channel.send(':tada: Tamam! Çekiliş silindi!');
        }).catch((err) => {
            message.channel.send('<:bakimda:798582408642560110> ' + messageID + ', ID li çekiliş bulunamadı!');
        });
    }
}
exports.conf = {
aliases: [] 
}
exports.help = {
name: "çekiliş-sil" 
} 
