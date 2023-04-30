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
const prefix="jitesh "

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('Myself Jitesh Sharma From Bihar. Nice to Meet me');
  client.user.setStatus('dnd');
})

// client.on("messageCreate", msg => {
// 	if(!msg.author.bot){
// 	if(msg.content.toLowerCase().startsWith(prefix)){
// 		if(basicCon(msg)!="0"){
// 			// msg.channel.send(basicCon(msg))
// 			// console.log(basicCon(msg)+"index.js");
// 		}else{
// 			console.log("no qa");
// 		}
// 	}
// }
// })
// var cats = require('cat-ascii-faces')
const emojis=["💩","💀","👾","🧜","👙"]
client.on("messageCreate", msg => {
	if(msg.mentions.has(client.user) || msg.content.toLowerCase().includes("jitesh")){
		if(!msg.author.bot){
			msg.react(`${emojis[Math.floor(Math.random() * emojis.length)]}`)
	}}})

// client.on("messageCreate", (msg) => {
// 	if(msg.content.toLowerCase().startsWith(prefix+"kick")){
// 		if(msg.mentions.members.first()){
// 			try{
// 				msg.mentions.members.first().kick();
// 				msg.reply(`${msg.mentions.members.first()} was kicked`)
// 				message.author.send("You were kicked from jitesh sharma coding server. to rejoin suck dick")
// 			}catch{
// 				msg.reply("couldnt kick the person :/")
// 			}}
// 		}
// })

client.on("messageCreate", msg => {
	if(!msg.author.bot){
	if(msg.content.toLowerCase().startsWith(prefix+"kick")){
        if (msg.mentions.members.first()) {
            try {
                msg.members.mentions.first().kick();
                msg.reply("member was kicked , oof ")
            } catch {
                msg.reply("maybe the person is an admin or i dont have the powers ");
            }
        } else {
            msg.reply("mention someone to be kicked outta this server ");
        }  
}}})

client.login(token)