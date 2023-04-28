const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');
const { messageCase } = require('./messageCase');
const { basicCon } = require('./basicCon');
const client = new Client({intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMembers,
], });

const prefix="JITESH"

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setStatus('dnd');
})

client.on("messageCreate", msg => {
	if(!msg.author.bot){
	if(msg.content.toUpperCase().startsWith(prefix)){
		if(basicCon(msg)!="0"){
			msg.channel.send(basicCon(msg))
			console.log(basicCon(msg)+"index.js");
		}else{
			console.log("no qa");
		}
	}
}
})



client.login(token)