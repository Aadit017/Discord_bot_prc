const {SlashCommandBuilder}=require('discord.js')

module.exports={
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Replies with a simple pong"),

    async execute(interaction){
        await interaction.reply("pong");
    }
}