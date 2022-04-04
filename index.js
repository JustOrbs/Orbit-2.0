const express = require("express");
const app = express();
const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

app.listen(3000, () => {
  console.log("App is running")
});

app.get("/", (req, res) => {
  res.send("Hello World!")
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


///Creating classes for activities
class PVE6{
    constructor(E6Name, E6Type){
        this.Name = E6Name;
        this.Type = E6Type;
    }
    G1 = "";
    G2 = "";
    G3 = "";
    G4 = "";
    G5 = "";
    G6 = "";
}

class PVE3{
    constructor(E3Name, E3Type){
        this.Name = E3Name;
        this.Strike = E3Type;
    }
    G1 = "";
    G2 = "";
    G3 = "";
}

class PVP6{
    constructor(P6Name, P6Type){
        this.Name = P6Name;
        this.Type = P6Type;
    }
    G1 = "";
    G2 = "";
    G3 = "";
    G4 = "";
    G5 = "";
    G6 = "";
}

class PVP3{
    constructor(P3Name, P3Type){
        this.Name = P3Name;
        this.Type = P3Type;
    }
    G1 = "";
    G2 = "";
    G3 = "";
}

/////Test interaction
client.on("messageCreate", message => {
  channel = message.channel_id
  if(message.content === "ping") {
    message.reply("pong")
  }


//Creating the main menu
  if(message.content === "!lfg") {
    let embed = new Discord.MessageEmbed()
    .setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()})
    .setTitle("Welcome to the Orbit LFG platform")
    .setDescription("Please select an option")
    .setColor("#ffa500")
    
    message.channel.send( {embeds : [embed], components : [{type : 1, components : [{
            type: 2,
            label: 'Create LFG Listing',
            style: 1,
            custom_id: 'newPostMenu'
        },
        {
            type: 2,
            label: 'View Current Listings',
            style: 2,
            custom_id: 'viewPostMenu'
        }]}] } )
  }
});


//Listening for buttons and drop down menus
client.on("interactionCreate", interaction => {
  //Log interaction data, used for testing
  console.log("interaction")
  console.log(interaction.values)


  
  if (interaction.customId === 'newPostMenu'){
    interaction.reply
      ({components : [{type: 1, components : [{
  type: 3,
  channel_id: channel,
  custom_id: "postType",
  options: [
    {
      label: "6 Player PVE",
      value: "PVE6",
      description: "Raids and stuff"
    },
    {
      label: "3 Player PVE",
      value: "PVE3",
      description: "Strikes and stuff"
    },
    {
      label: "6 Player PVP",
      value: "PVP6",
      description: "Iron Banner and stuff"
    },
    {
      label: "3 Player PVP",
      value: "PVP3",
      description: "Trials and stuff"
    }]
  
}]}]})
  }
});


const mySecret = process.env['token']
client.login(mySecret);