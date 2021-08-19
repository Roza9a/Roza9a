const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
require(`../config.json`);  = {
//define argstrue to negative
    let ifargstruedothis = -1;

      switch(args[0]){
          case "filter":
           ifargstruedothis=0;
          break;
          case "loop":
            ifargstruedothis=1;
          break;
          case "lyrics":
            ifargstruedothis=2
          break;
          case "nowplaying":
            ifargstruedothis=3
          break;
          case "pause":
            ifargstruedothis=4
          break;
          case "play":
            ifargstruedothis=5
          break;
          case "playlist":
            ifargstruedothis=6
          break;
          case "queue":
            ifargstruedothis=7
          break;
          case "radio":
            ifargstruedothis=8
          break;
          case "remove":
            ifargstruedothis=9
          break; 
          case "resume":
            ifargstruedothis=10
          break;
          case "search":
            ifargstruedothis=11
          break;
          case "shuffle":
            ifargstruedothis=12
          break;
          case "skip":
            ifargstruedothis=13
          break;
          case "skipto":
            ifargstruedothis=14
          break;
          case "stop":
            ifargstruedothis=15
          break;
          case "volume":
            ifargstruedothis=16
          break;
          case "botlist":
            ifargstruedothis=17
          break;
          case "help":
            ifargstruedothis=18
          break;
          case "invite":
            ifargstruedothis=19
          break;
          case "ping":
            ifargstruedothis=20
          break;
          case "prefix":
            ifargstruedothis=21
          break;
          case "uptime":
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

            if(!args[0]) {message.react("<:Yeh:827947991922376776>");return message.author.send(helpEmbed);}
            return
            }
            message.react("<:Yeh:827947991922376776>");
            message.author.send(new MessageEmbed().setColor("#c219d8")
            .setDescription(`** <:Ba:827947991632969749> Sent from <#${message.channel.id}>**`))
            message.author.send(helpEmbed)
            message.channel.send( new MessageEmbed().setColor("#c219d8")
            .setDescription(`** <:Ba:827947991632969749> ${message.author} Check your \`direct messages\` for a list of Commands!**`)
            );
           
        break;
       }
     
       if(ifargstruedothis>=0){
         let aliases = commands[ifargstruedothis].aliases;
         if(aliases === undefined || !aliases) aliases="No Aliases!";
         let cooldown = commands[ifargstruedothis].cooldown;
         if(cooldown === undefined || !cooldown) cooldown="No Cooldown!";


        helpEmbed.addField(
          `**${message.client.prefix}${commands[ifargstruedothis].name}**`,
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
          .setDescription(`** <:Ba:827947991632969749> ${message.author} Check your \`direct messages\` for a list of Commands!**`)
          );
       }

}
} 
