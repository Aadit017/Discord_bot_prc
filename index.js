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
const ytdl = require('ytdl-core');
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
// client.on("messageCreate", msg => {
// 	if(msg.mentions.has(client.user)){
// 		if(!msg.author.bot){
// 			msg.reply(`${cats()}`)
// 	}}})

//https://www.freecodecamp.org/news/how-to-create-a-music-bot-using-discord-js-4436f5f3f0f8/
const serverQueue=queue.get(message.guild.id)
client.on("message", (msg) => {
	if(!msg.author.bot){
		if(msg.content.toLowerCase().startsWith(prefix+"play")){
			execute(message,serverQueue);
			return
		}else if(msg.content.toLowerCase().startsWith(prefix+"skip")){
				StickerPack(message,serverQueue)
		}else if(msg.content.toLowerCase().startsWith(prefix+"stop")){
			stop(message,serverQueue)
			return
		}else{
			message.channel.send("you need to enter a valid command kutte kamine")
		}
}})

const queue=new Map();
async function execute(message, serverQueue) {
	const args = message.content.split(" ");
  
	const voiceChannel = message.member.voice.channel;
	if (!voiceChannel)
	  return message.channel.send(
		"You need to be in a voice channel to play music!"
	  );
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
	  return message.channel.send(
		"I need the permissions to join and speak in your voice channel!"
	  );
	}
  }


client.login(token)