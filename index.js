const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const BOT_TOKEN = 'MTQ4MDM4MTk1MTM1MjUwNDM3MQ.GcCsgx.lVUzDKDIVNF--fjX5VSNGMeNn8YPYahmiiCI3M';
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ]
});

client.on('ready', () => {
  console.log('Bot online: ' + client.user.tag);
  client.user.setPresence({
    activities: [{ name: 'Promotions System', type: ActivityType.Watching }],
    status: 'online',
  });
});

client.login(BOT_TOKEN);
