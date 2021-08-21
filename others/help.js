const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: ``,
  description: "(h)Gives you a list of all help Commands",
  aliases: [],
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
    let helpEmbed = new MessageEmbed()
      .setTitle(`List of all commands`)
      .setDescription("__**```CHILL BOT```**__")
       .setImage('')
       .setFooter(message.author.username, message.author.displayAvatarURL)
       .setDescription(`**[  SUPPORT  ](https://discord.gg/kurd1)**   -  [   INVITE   ](ODc0MjU5MDg4ODc4NDg1NTU1.YREXOQ.neQwh-m5jZZX1awC_Uw-OrEJxBg)`)
      .setThumbnail(message.author.avatarURL({dynamic: "true"}))
      .setColor('RANDOM');
    let ifargstruedothis = -1;

      switch(args[0]){
          case "":
           ifargstruedothis=0;
          break;
          case "":
            ifargstruedothis=1;
          break;
          case "":
            ifargstruedothis=2
          break;
          case "":
            ifargstruedothis=3
          break;
          case "":
            ifargstruedothis=4
          break;
          case "":
            ifargstruedothis=5
          break;
          case "":
            ifargstruedothis=6
          break;
          case "":
            ifargstruedothis=7
          break;
          case "":
            ifargstruedothis=8
          break;
          case "":
            ifargstruedothis=9
          break; 
          case "":
            ifargstruedothis=10
          break;
          case "":
            ifargstruedothis=11
          break;
          case "":
            ifargstruedothis=12
          break;
          case "":
            ifargstruedothis=13
          break;
          case "":
            ifargstruedothis=14
          break;
          case "":
            ifargstruedothis=15
          break;
          case "":
            ifargstruedothis=16
          break;
          case "":
            ifargstruedothis=17
          break;
          case "":
            ifargstruedothis=18
          break;
          case "":
            ifargstruedothis=19
          break;
          case "":
            ifargstruedothis=20
          break;
          case "":
            ifargstruedothis=21
          break;
          case "":
            ifargstruedothis=22
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
        .setDescription(`**👍 ${message.author} Check your \`direct messages\` for a list of Commands!**`)
          );
       }

}
}
