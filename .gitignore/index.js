const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("I'm a just a test made by CoRiCo02");
    console.log("The bot have succesfuly joined the server");
});

bot.login("NTYzODgzODIzNDc0MDE2MjU4.XKf0kQ.bSma3_hWHLf3efrdRVhp6CM-5hQ");
