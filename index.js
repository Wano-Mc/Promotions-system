const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

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

client.login(process.env.BOT_TOKEN);
