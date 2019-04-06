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
    switch (args[0].toLowerCase()) {
        case "membres":
      		message.channel.send("", {    
            embed: {
                color: 0xFF0000, 
                author:  message.author.name,
                title: '', 
                description: '', 
                fields: [
                    {
                        name: "Voici le nombre d'utilisateurs sur le discord !",
                        value: bot.users.size + '',
                        inline: false
                   }],                     
                                   footer: {
            text: '',
          },
            }
        });
            message.react("✅")
        break
    };
    const command = args.shift().toLowerCase();


    if command == "clap"){
        message.reply('applaudit !👏👏👏')
        console.log("Commande !clap demander")
    }
});



bot.login(process.env.TOKEN);
