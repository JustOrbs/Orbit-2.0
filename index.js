const express = require("express");
const app = express();
const Discord = require("discord.js")
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});
const target = '819038684618686495'
const word = 'Orbit LFG'

var posts = [];

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



class Raid {
    constructor(leader, raid) {
        this.Guardians[0] = leader
        this.Name = raid
    }
    Guardians = ["OPEN", "OPEN", "OPEN", "OPEN", "OPEN", "OPEN"];
    Type = "Raid"
}

class Strike {
    constructor(leader) {
        this.G1 = leader
    }
    G2 = "";
    G3 = "";
}

class PVP6 {
    constructor(leader) {
        this.G1 = leader
    }
    G2 = "";
    G3 = "";
    G4 = "";
    G5 = "";
    G6 = "";
}

class PVP3 {
    constructor(leader) {
        this.G1 = leader
    }
    G2 = "";
    G3 = "";
}


//Creating the main menu
var mainMenu1 = [{
    type: 1,
    components: [{
            type: 2,
            label: 'Create LFG Post',
            style: 1,
            custom_id: 'newPostMenu'
        },
        {
            type: 2,
            label: 'View Current LFG Posts',
            style: 2,
            custom_id: 'viewPostMenu',
            disabled: true
        },
        {
            type: 2,
            label: 'Delete LFG Post',
            style: 4,
            custom_id: 'removePostMenu',
            disabled: true
        }
    ]
}]

var mainMenu2 = [{
    type: 1,
    components: [{
            type: 2,
            label: 'Create LFG Post',
            style: 1,
            custom_id: 'newPostMenu'
        },
        {
            type: 2,
            label: 'View Current LFG Posts',
            style: 2,
            custom_id: 'viewPostMenu',
        },
        {
            type: 2,
            label: 'Delete LFG Post',
            style: 4,
            custom_id: 'removePostMenu',
        }
    ]
}]



/////Test interaction
client.on("messageCreate", message => {
    channel = message.channel_id
    if (message.content === "ping") {
        message.reply("pong")
    }



    //Creating the main menu



    if (message.content === "!lfg") {
        let embed = new Discord.MessageEmbed()
            .setAuthor({
                name: message.author.username,
                iconURL: message.author.displayAvatarURL()
            })
            .setTitle("Welcome to the Orbit LFG platform")
            .setDescription("Please select an option")
            .setColor("#ffa500")
        if (posts.length > 0) {
            message.channel.send({
                embeds: [embed],
                components: mainMenu2
            })
        } else {
            message.channel.send({
                embeds: [embed],
                components: mainMenu1
            })
        }
    }
});




//Listening for buttons




client.on("interactionCreate", interaction => {



    //Create LFG Post Button



    if (interaction.customId === 'newPostMenu') {
        interaction.update({
            components: [{
                type: 1,
                components: [{
                        type: 2,
                        label: 'Raid',
                        style: 3,
                        custom_id: 'Raid'
                    },
                    {
                        type: 2,
                        label: 'Strikes/Nighfalls',
                        style: 3,
                        custom_id: 'Strike'
                    },
                    {
                        type: 2,
                        label: 'Casual PVP',
                        style: 3,
                        custom_id: 'PVP'
                    },
                    {
                        type: 2,
                        label: 'Trials',
                        style: 3,
                        custom_id: 'Trials'
                    }
                ]
            }]
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
            components: mainMenu2
        })
    }

    //New Posts Menu Interactions

    if (interaction.customId === 'Raid') {
        console.log(interaction)
        interaction.update({
            components: [{
                type: 1,
                components: [{
                        type: 2,
                        label: 'Last Wish',
                        style: 1,
                        custom_id: 'LW'
                    },
                    {
                        type: 2,
                        label: 'Garden of Salvation',
                        style: 1,
                        custom_id: 'GOS'
                    },
                    {
                        type: 2,
                        label: 'Deep Stone Crypt',
                        style: 1,
                        custom_id: 'DSC'
                    },
                    {
                        type: 2,
                        label: 'Vault of Glass',
                        style: 1,
                        custom_id: 'VOG'
                    },
                    {
                        type: 2,
                        label: 'Vow of the Disciple',
                        style: 1,
                        custom_id: 'VOTD'
                    },
                ]
            }]
        })
    }




    //Join Group Command Handlers




    if (interaction.customId === 'joinGroup1') {
        if (posts[0] != null) {
            let inGroup = false;
            for (let index = 0; index < 6; index++) {
                if (posts[0].Guardians[index] === interaction.member.user.username) {
                    interaction.update({
                        content: "Hey! You're already in this group",
                        components: mainMenu2
                    })
                    inGroup === true
                } else if (posts[0].Guardians[index] === "OPEN") {
                    posts[0].Guardians[index] = interaction.member.user.username
                    inGroup = true
                    interaction.update({
                        content: ('Added ' + interaction.member.user.username + " to " + posts[0].Name),
                        components: mainMenu2
                    })
                }
                if (inGroup === true) {
                    break
                }
                if (index === 5) {
                    interaction.update({
                        content: "Group is full",
                        components: mainMenu2
                    })
                }
            }
        } else {
            interaction.update('No post exists in this position')
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
                        components: mainMenu2
                    })
                }
                if (inGroup === true) {
                    break
                }
            }
        } else {
            interaction.update('No post exists in this position')
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
                        components: mainMenu2
                    })
                }
                if (inGroup === true) {
                    break
                }
            }
        } else {
            interaction.update('No post exists in this position')
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
                        components: mainMenu2
                    })
                }
                if (inGroup === true) {
                    break
                }
            }
        } else {
            interaction.update('No post exists in this position')
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
                        components: mainMenu2
                    })
                }
                if (inGroup === true) {
                    break
                }
            }
        } else {
            interaction.update('No post exists in this position')
        }
    }




    //Raid Creation Command Handlers




    if (interaction.customId === 'LW') {
        if (posts.length < 5) {
            posts.push(new Raid(interaction.member.user.username, 'Last Wish'))
            interaction.update({
                content: ("<@&819246947612753961> " + interaction.member.user.username + ' Has created new Last Wish group'),
                components: mainMenu2
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: mainMenu2
            })
        }
    }

    if (interaction.customId === 'GOS') {
        if (posts.length < 5) {
            posts.push(new Raid(interaction.member.user.username, 'Garden of Salvation'))
            interaction.update({
                content: ("@" + interaction.member.user.username + "#" + interaction.member.user.discriminator + ' Successfully created new Garden of Salvation group'),
                components: mainMenu2
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: mainMenu2
            })
        }
    }

    if (interaction.customId === 'DSC') {
        if (posts.length < 5) {
            posts.push(new Raid(interaction.member.user.username, 'Deep Stone Crypt'))
            interaction.update({
                content: ("@" + interaction.member.user.username + "#" + interaction.member.user.discriminator + ' Successfully created new Deep Stone Crypt group'),
                components: mainMenu2
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: mainMenu2
            })
        }
    }

    if (interaction.customId === 'VOG') {
        if (posts.length < 5) {
            posts.push(new Raid(interaction.member.user.username, 'Vault of Glass'))
            interaction.update({
                content: ("@" + interaction.member.user.username + "#" + interaction.member.user.discriminator + ' Successfully created new Vault of Glass group'),
                components: mainMenu2
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: mainMenu2
            })
        }
    }

    if (interaction.customId === 'VOTD') {
        if (posts.length < 5) {
            posts.push(new Raid(interaction.member.user.username, 'Vow of the Disciple'))
            interaction.update({
                content: ("@" + interaction.member.user.username + "#" + interaction.member.user.discriminator + ' Successfully created new Vow of the Disciple group'),
                components: mainMenu2
            })
        } else {
            interaction.update({
                content: 'Sorry! LFG post list is already full',
                components: mainMenu2
            })
        }
    }


});


const mySecret = process.env['token']
client.login(mySecret);