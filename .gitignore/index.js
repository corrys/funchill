const Discord = require("discord.js");

bot.user.setGame("Made by CoRiCo02");

var PREFIX = "?";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("The bot have succesfuly joined the server");
});

bot.login(process.env.TOKEN);
