const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const fs=require('node:fs')
const path= require("node:path")
require('../node_modules/dotenv').config()// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { token } = require('./config.json');
const command = require('nodemon/lib/config/command');


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.commands = new Collection();

const commandsPath = path.join(__dirname,'commands')
const commandFiles=fs.readFileSync(commandsPath).filter(file=>file.endsWith('.js'))

for (const file of commandFiles){
	const filepath = path.join(commandsPath,file)
	if ('data' in command && 'execute' in command){
		client.commands.set(command.data.name,command);
		console.log("works")
	}else {
		const channel = client.channels.cache.get('1101172819359977517');
		channel.send("Error aya Aadit bhai apke code mein ek abhi abhi sach mein pls check krlo")
	}
}

client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction);
});


client.login(token)