const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
//
client.login('MTEwMTE3MDU5NzMwOTk4NDgxOA.GDybrl.MUKIRA4prGNzJB7s6E70oFaQzKTvk6R9f2Tjlg')