const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: `~musiccommands`,
  description: "(h)Gives you a list of all help Commands",
  aliases: ["h","commands"],
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  async execute(message,args,client) {

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = PREFIX;
    //react with approve emoji
    message.react("769665713124016128");
    //define the commands as a command
    let commands = message.client.commands.array();
    //define the help embed
    let resultsEmbed = new Discord.MessageEmbed()
      .setTitle(`List of all commands`)
       .setImage('https://cdn.discordapp.com/attachments/877688129463664690/877891416209121280/92d9607b947fbd8c44a0df1f3c582d71.gif')
      .setThumbnail(message.author.avatarURL({dynamic: "true"}))
      .setColor('RANDOM');
       //define argstrue to negative
    let ifargstruedothis = -1;

      switch(args[0]){
          case "filter":
           ifargstruedothis=0;
          break;
          case "loop":
            ifargstruedothis=0.1;
          break;
          case "lyrics":
            ifargstruedothis=0.3
          break;
          case "nowplaying":
            ifargstruedothis=0.4
          break;
          case "pause":
            ifargstruedothis=0.5
          break;
          case "play":
            ifargstruedothis=1
          break;
          case "playlist":
            ifargstruedothis=2
          break;
          case "queue":
            ifargstruedothis=3
          break;
          case "radio":
            ifargstruedothis=4
          break;
          case "remove":
            ifargstruedothis=5
          break; 
          case "resume":
            ifargstruedothis=6
          break;
          case "search":
            ifargstruedothis=7
          break;
          case "shuffle":
            ifargstruedothis=8
          break;
          case "skip":
            ifargstruedothis=9
          break;
          case "skipto":
            ifargstruedothis=10
          break;
          case "stop":
            ifargstruedothis=11
          break;
          case "volume":
            ifargstruedothis=12
          break;
          case "botlist":
            ifargstruedothis=13
          break;
          case "help":
            ifargstruedothis=14
          break;
          case "invite":
            ifargstruedothis=15
          break;
          case "ping":
            ifargstruedothis=16
          break;
          case "prefix":
            ifargstruedothis=17
          break;
          case "uptime":
            ifargstruedothis=18
          break;
          default:
            commands.forEach((cmd) => {
              helpEmbed.addField(
                `**${prefix}${cmd.name}**`,
                `${cmd.description}`,
                true
              );
            });
    
          if(!message.guild) {
            if(!args[0]) {message.react(approveemoji);return message.channel.send(helpEmbed);}
            return
            }
            message.react(approveemoji);
message.channel.send(helpEmbed)

        break;
       }

       if(ifargstruedothis>=0){
         let aliases = commands[ifargstruedothis].aliases;
         if(aliases === undefined || !aliases) aliases="No Aliases!";
         let cooldown = commands[ifargstruedothis].cooldown;
         if(cooldown === undefined || !cooldown) cooldown="No Cooldown!";


        helpEmbed.addField(
          `**${prefix}${commands[ifargstruedothis].name}**`,
          `\`\`\`fix\n${commands[ifargstruedothis].edesc}\n\`\`\`\n\`${commands[ifargstruedothis].description}\``
        );
        helpEmbed.addField(
          `**:notes: Aliases:**`,
          `\`${aliases}\``
        );
        helpEmbed.addField(
          `**:wrench: Cooldown:**`,
          `\`${cooldown}\``
        );
        if(!message.guild) return message.author.send(helpEmbed);
          message.author.send(helpEmbed)
          message.channel.send( new MessageEmbed().setColor("#c219d8")
        .setDescription(`**📩 ${message.author} Check your \`direct messages\` for a list of Commands!**`)
          );
       }

}
