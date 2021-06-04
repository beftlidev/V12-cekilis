const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
  storage: "./çekilişler.json",
  updateCountdownEvery: 10000,
  default: {
    botsCanWin: false,
    embedColor: "RANDOM",
    reaction: "🎉"
  }
});

client.giveawaysManager = manager;
