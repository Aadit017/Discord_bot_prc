const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');
const { messageCase } = require('./messageCase');
const client = new Client({intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMembers,
], });

const prefix="JITESH"

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
	msg.channel.send(msg.content.toUpperCase());
	if(msg.content.toUpperCase().startsWith(prefix)=="JITESH"){
		msg.channel.send(messageCase(msg))
		console.log("-")
	}
  
})

client.login(token)