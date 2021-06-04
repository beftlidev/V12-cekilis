const Discord = require("discord.js")
exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed() 
.setColor("RANDOM") 
.setDescription(`> **g.çekiliş-başlat** - Çekiliş yaparsınız.
> **g.çekiliş-düzenle** - Çekiliş düzenlersiniz. 
> **g.çekiliş-sil** - Çekiliş silersiniz. 
> **g.çekiliş-yeniden-çek** - Çekiliş kazanan yeniden çekersiniz. 
> **g.çekiliş-bitir** - Çekiliş bitirsiniz
> **g.çekiliş-liste** - Çekiliş' leri listeleriniz.
`) 
.setTitle("Space Giveaway Yardım Menüsü") 

}
exports.conf = {
aliases: [] 
}
exports.help = {
name: "yardım" 
} 
