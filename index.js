const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const fs=require('node:fs')
const path= require("node:path")
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.commands = new Collection();

const commandsPath = path.join(__dirname,'commands')
const commandFiles=fs.readFileSync(commandsPath).filter(file=>file.endsWith('.js'))

for (const file of commandFiles){
	const filepath = path.join 
}

client.login('MTEwMTE3MDU5NzMwOTk4NDgxOA.GDybrl.MUKIRA4prGNzJB7s6E70oFaQzKTvk6R9f2Tjlg')