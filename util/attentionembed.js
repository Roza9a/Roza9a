const { Client, Collection, MessageEmbed } = require("discord.js");
const {
  approveemoji,
  denyemoji,
  AVATARURL,
  BOTNAME,
  BOTCOLOR,
} = require(`../config.json`);
module.exports = {
 async  attentionembed(message, titel) {

    try{
      await message.reactions.removeAll();
       await message.react(denyemoji);
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle(" ❌ | " + titel)
      .setColor("#8AD0DA")
      
      message.channel.send(resultsEmbed);
    return;

  }
};
