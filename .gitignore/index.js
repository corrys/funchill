const Discord = require("discord.js");

var PREFIX = "?";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("The bot have succesfuly joined the server");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(arg[0].toLowerCase()) {
        case "invite":
        message.channel.send("test")
        break;
    }

    if(message.content === 'funchill') {
        message.reply('<3')
    }
bot.on('messageCreate', (msg) => {                     // When a message is created
        if(msg.content.includes('1337')) {                 // If the message content includes "1337"
            bot.createMessage(msg.channel.id, 'damn it');  // Send a message in the same channel with "damn it"
        }
    
});

bot.login(process.env.TOKEN);
