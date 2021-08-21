////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { PREFIX } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "stop",
  description: "(leave)Stops the music",
  aliases: ["leave", "end"],
  cooldown: 5,
  edesc: `Type the Command, to stop playing and leave the channel.\nUsage: ${PREFIX}stop`,

async execute(message,args,client) {
  //if not in a guild retunr
  if (!message.guild) return;
  //react with approve emoji
  message.react("769665713124016128").catch(console.error);
  const { channel } = message.member.voice;
  //get the serverQueue
  const queue = message.client.queue.get(message.guild.id);
  //if not a valid channel
  if (!channel) return attentionembed(message, "Please join a Voice Channel first");
  //If not in the same channel return error
  if (queue && channel !== message.guild.me.voice.channel)
  return attentionembed(message, `You must be in the same Voice Channel as me`);
  //if no Queue return error
  if (!queue)
    return attentionembed(message, "There is nothing you can stop!");
  //if not in the same channel return
  if (!canModifyQueue(message.member)) return;
  //Leave the channel
  await channel.leave();
  //send the approve message
  message.channel.send(new MessageEmbed()
  .setColor("#8AD0DA")
  .setAuthor(`${message.author.username} stopped the music!`, "https://cdn.discordapp.com/attachments/807677211133083698/878676756159168532/music-stop-icon-39445_1.png"))
  .catch(console.error);
  }
};
