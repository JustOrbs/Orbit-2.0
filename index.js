const express = require("express");
const app = express();
const Discord = require("discord.js")
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});
const menu = require("./src/menuControl/menus.js")
const group = require("./src/postControl/groupClasses.js")
const embed = require("./src/menuControl/embeds.js")


const errChannel = "961290142973321306"


var posts = [];
var strikeDifficulty = ""

app.listen(3000, () => {
    console.log("App is running")
});

app.get("/", (req, res) => {
    res.send("Hello World!")
});



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



//Error handling

process.on('unhandledRejection', (reason, p) => {

        console.log(" [Anti-crash] :: Unhandled Rejection/Catch")
        console.log(reason, p)

        const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("⚠ New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + reason + "\n\n" + p + "```")
            .setTimestamp()
            .setFooter("Anti-Crash System")

        client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })

    })

    process.on('uncaughtException', (err, origin) => {

        console.log(" [Anti-crash] :: Uncaught Exception/Catch")
        console.log(err, origin)

        const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("⚠ New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + err + "\n\n" + origin + "```")
            .setTimestamp()
            .setFooter("Anti-Crash System")

        client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })

    })

    process.on('uncaughtExceptionMonitor', (err, origin) => {

        console.log(" [Anti-crash] :: Uncaught Exception/Catch (MONITOR)")
        console.log(err, origin)

        const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("⚠ New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + err + "\n\n" + origin + "```")
            .setTimestamp()
            .setFooter("Anti-Crash System")

        client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })

    })

    process.on('multipleResolves', (type, promise, reason) => {

        console.log(" [Anti-crash] :: Multiple Resolves")
        console.log(type, promise, reason)

        const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("⚠ New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + type + "\n\n" + promise + "\n\n" + reason + "```")
            .setTimestamp()

        client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })

    })








/////Test interaction
client.on("messageCreate", message => {
    channel = message.channel_id
    if (message.content === "ping") {
        message.reply("pong")
    }



    //Creating the main menu



    if (message.content === "!lfg") {
      embed.mainMenu[0].author = {
                name: message.author.username,
                iconURL: message.author.displayAvatarURL()
      }
      console.log(embed.mainMenu)
        if (posts.length > 0) {

            message.channel.send({
                embeds: embed.mainMenu,
                components: menu.mainMenuActive
            })
        } else {
            message.channel.send({
                embeds: embed.mainMenu,
                components: menu.mainMenuDisabled
            })
        }
    }
});




//Listening for buttons




client.on("interactionCreate", interaction => {
  if (interaction.values != null){
    console.log(interaction.values)
    console.log(interaction.values[0])
    if (interaction.customId === "strikeSelect"){
  if (interaction.values[0] === 'strike1') {
    console.log("Menu success")
    interaction.update({
      content: "Fucking work please",
      components: menu.mainMenuActive
    })
    }
   }
  }

  if (interaction.customId === "toMainMenu"){
    if(posts.length > 0) {
      interaction.update({
        components:
          menu.mainMenuActive
      })
    }
    else {
      interaction.update({
        components:
          menu.mainMenuDisabled
      })
    }
  }



    //Create LFG Post Button



    if (interaction.customId === 'newPostMenu') {
        interaction.update({
            components: 
              menu.newPostMenu
        })
    }




    //View LFG Posts Button



    if (interaction.customId === 'viewPostMenu') {
        if (posts.length == 0) {
            interaction.update("No posts exist")
        } else {
            let embed = new Discord.MessageEmbed()
                .setAuthor({
                    name: interaction.member.user.username,
                    iconURL: interaction.member.user.displayAvatarURL()
                })
                .setTitle("LFG Posts")
                .setColor("#ffa500")
            for (let index = 0; index < posts.length; index++) {
                embed.addFields({
                        name: ("1 " + posts[index].Type + " / " + posts[index].Name),
                        value: (posts[index].Guardians[0] + " " + posts[index].Guardians[1] + " " + posts[index].Guardians[2] + " " + posts[index].Guardians[3] + " " + posts[index].Guardians[4] + " " + posts[index].Guardians[5])
                    }

                )
            }
            interaction.update({
                embeds: [embed],
                components: [{
                    type: 1,
                    components: [{
                            type: 2,
                            label: 'Join Group 1',
                            style: 3,
                            custom_id: 'joinGroup1'
                        },
                        {
                            type: 2,
                            label: 'Join Group 2',
                            style: 3,
                            custom_id: 'joinGroup2'
                        },
                        {
                            type: 2,
                            label: 'Join Group 3',
                            style: 3,
                            custom_id: 'joinGroup3'
                        },
                        {
                            type: 2,
                            label: 'Join Group 4',
                            style: 3,
                            custom_id: 'joinGroup4'
                        },
                        {
                            type: 2,
                            label: 'Join Group 5',
                            style: 3,
                            custom_id: 'joinGroup5'
                        },
                    ]
                }]
            })
        }
    }




    //Delete LFG Post Buttons



    if (interaction.customId === 'removePostMenu') {
        interaction.update({
            content: "Delete LFG menu coming soon!",
            components: menu.mainMenuActive
        })
    }

    //New Posts Menu Interactions

    if (interaction.customId === 'Raid') {
        interaction.update({
            components: menu.raidMenu
        })
    }

    if (interaction.customId === 'Strike') {
        interaction.update({
            components: menu.strikeMenu
        })
    }

    if (interaction.customId === 'Cas') {
        interaction.update({
            components: menu.casMenu
        })
    }

  if (interaction.customId === 'Comp') {
        interaction.update({
            components: menu.compMenu
        })
    }




    //Join Group Command Handlers




    if (interaction.customId === 'joinGroup1') {
      try{
        if (posts[0] != null) {
            let inGroup = false;
            for (let index = 0; index < 6; index++) {
                if (posts[0].Guardians[index] === interaction.member.user.username) {
                    interaction.update({
                        content: "Hey! You're already in this group",
                        components: menu.mainMenuActive
                    })
                    inGroup === true
                } else if (posts[0].Guardians[index] === "OPEN") {
                    posts[0].Guardians[index] = interaction.member.user.username
                    inGroup = true
                    interaction.update({
                        content: ('Added ' + interaction.member.user.username + " to " + posts[0].Name),
                        components: menu.mainMenuActive
                    })
                }
                if (inGroup === true) {
                    break
                }
                if (index === 5) {
                    interaction.update({
                        content: "Group is full",
                        components: menu.mainMenuActive
                    })
                }
            }
        } else {
            interaction.update({content: 'No post exists in this position', components: menu.mainMenuActive})
        }
      } catch(DiscordAPIError) {
        console.log("Error Found")
      }
    }

    if (interaction.customId === 'joinGroup2') {
        if (posts[1] != null) {
            let inGroup = false;
            for (let index = 0; index < 6; index++) {
                if (posts[1].Guardians[index] === interaction.member.user.username) {
                    interaction.update("Hey! You're already in this group")
                    inGroup === true
                } else if (posts[1].Guardians[index] === "OPEN") {
                    posts[1].Guardians[index] = interaction.member.user.username
                    inGroup = true
                    interaction.update({
                        content: ('Added ' + interaction.member.user.username + " to " + posts[1].Name),
                        components: menu.mainMenuActive
                    })
                }
                if (inGroup === true) {
                    break
                }
            }
        } else {
            interaction.update({content: 'No post exists in this position', components: menu.mainMenuActive})
        }
    }

    if (interaction.customId === 'joinGroup3') {
        if (posts[2] != null) {
            let inGroup = false;
            for (let index = 0; index < 6; index++) {
                if (posts[2].Guardians[index] === interaction.member.user.username) {
                    interaction.update("Hey! You're already in this group")
                    inGroup === true
                } else if (posts[2].Guardians[index] === "OPEN") {
                    posts[2].Guardians[index] = interaction.member.user.username
                    inGroup = true
                    interaction.update({
                        content: ('Added ' + interaction.member.user.username + " to " + posts[2].Name),
                        components: menu.mainMenuActive
                    })
                }
                if (inGroup === true) {
                    break
                }
            }
        } else {
            interaction.update({content: 'No post exists in this position', components: menu.mainMenuActive})
        }
    }

    if (interaction.customId === 'joinGroup4') {
        if (posts[3] != null) {
            let inGroup = false;
            for (let index = 0; index < 6; index++) {
                if (posts[3].Guardians[index] === interaction.member.user.username) {
                    interaction.update("Hey! You're already in this group")
                    inGroup === true
                } else if (posts[3].Guardians[index] === "OPEN") {
                    posts[3].Guardians[index] = interaction.member.user.username
                    inGroup = true
                    interaction.update({
                        content: ('Added ' + interaction.member.user.username + " to " + posts[3].Name),
                        components: menu.mainMenuActive
                    })
                }
                if (inGroup === true) {
                    break
                }
            }
        } else {
            interaction.update({content: 'No post exists in this position', components: menu.mainMenuActive})
        }
    }

    if (interaction.customId === 'joinGroup5') {
        if (posts[4] != null) {
            let inGroup = false;
            for (let index = 0; index < 6; index++) {
                if (posts[4].Guardians[index] === interaction.member.user.username) {
                    interaction.update("Hey! You're already in this group")
                    inGroup === true
                } else if (posts[4].Guardians[index] === "OPEN") {
                    posts[4].Guardians[index] = (interaction.member.user.username)
                    inGroup = true
                    interaction.update({
                        content: ('Added ' + interaction.member.user.username + " to " + posts[4].Name),
                        components: menu.mainMenuActive
                    })
                }
                if (inGroup === true) {
                    break
                }
            }
        } else {
            interaction.update({content: 'No post exists in this position', components: menu.mainMenuActive})
        }
    }




    //Raid Creation Command Handlers




    if (interaction.customId === 'LW') {
        if (posts.length < 5) {
            posts.push(new group.Raid(interaction.member.user.username, 'Last Wish'))
            interaction.update({
                content: ("<@&819246947612753961> " + interaction.member.user.username + ' Has created new Last Wish group'),
                components: menu.mainMenuActive
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: menu.mainMenuActive
            })
        }
    }

    if (interaction.customId === 'GOS') {
        if (posts.length < 5) {
            posts.push(new group.Raid(interaction.member.user.username, 'Garden of Salvation'))
            interaction.update({
                content: ("<@&819246947612753961> " + interaction.member.user.username + ' Has created new Garden of Salvation group'),
                components: menu.mainMenuActive
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: menu.mainMenuActive
            })
        }
    }

    if (interaction.customId === 'DSC') {
        if (posts.length < 5) {
            posts.push(new group.Raid(interaction.member.user.username, 'Deep Stone Crypt'))
            interaction.update({
                content: ("<@&819246947612753961> " + interaction.member.user.username + ' Has created new Deep Stone Crypt group'),
                components: menu.mainMenuActive
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: menu.mainMenuActive
            })
        }
    }

    if (interaction.customId === 'VOG') {
        if (posts.length < 5) {
            posts.push(new group.Raid(interaction.member.user.username, 'Vault of Glass'))
            interaction.update({
                content: ("<@&819246947612753961> " + interaction.member.user.username + ' Has created new Vault of Glass group'),
                components: menu.mainMenuActive
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: menu.mainMenuActive
            })
        }
    }

    if (interaction.customId === 'VOTD') {
        if (posts.length < 5) {
            posts.push(new group.Raid(interaction.member.user.username, 'Vow of the Disciple'))
            interaction.update({
                content: ("<@&819246947612753961> " + interaction.member.user.username + ' Has created new Vow of the Disciple group'),
                components: menu.mainMenuActive
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: menu.mainMenuActive
            })
        }
    }



  ///Strike Creation Handlers

  if (interaction.customId === "Adept" || 
      interaction.customId === "Hero" || 
      interaction.customId === "Legend" || 
      interaction.customId === "Master" || 
      interaction.customId === "GM"){
      switch (interaction.customId){
        case "Adept": strikeDifficulty = "Adept"
        case "Hero": strikeDifficulty = "Hero"
        case "Legend": strikeDifficulty = "Legend"
        case "Master": strikeDifficulty = "Master"
        case "GM": strikeDifficulty = "GM"
      }
    interaction.update({
      content: ("Strike Difficulty: " + strikeDifficulty),
      components: menu.strikeMenu2
    })
  }


});


const mySecret = process.env['token']
client.login(mySecret);