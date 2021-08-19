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
      .addfailed(`
  
  **Public Command**
  \`${prefix}cmd1\`
  \`${prefix}cmd2\`
  \`${prefix}cmd3\`
  \`${prefix}cmd4\`
  \`${prefix}cmd5\`
  **Admin Command**
  \`${prefix}cmd1\`
  \`${prefix}cmd2\`
  \`${prefix}cmd3\`
  \`${prefix}cmd4\`
  \`${prefix}cmd5\``)
  .setFooter(`🛠 | Thx for using my cmd\nmy prefix = <${prefix}>`) 
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
