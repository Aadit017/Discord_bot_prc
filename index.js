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
  client.user.setActivity('ME Jitesh Sharma From Bihar. Nice to Meet me');
  client.user.setStatus('dnd');
})

client.on("messageCreate", msg => {
	if(!msg.author.bot){
	if(msg.content.toUpperCase().startsWith(prefix)){
		if(basicCon(msg)!="0"){
			// msg.channel.send(basicCon(msg))
			// console.log(basicCon(msg)+"index.js");
		}else{
			console.log("no qa");
		}
	}
}
})
var cats = require('cat-ascii-faces')
client.on("messageCreate", msg => {
	if(msg.mentions.has(client.user)){
		if(!msg.author.bot){
			msg.reply(`${cats()}`)
	}}})


	

client.login(token)