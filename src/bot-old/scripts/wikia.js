"use strict";

const discord = require("discord.js");

const { wikiaSearch } = require("../../utils");

const Command = require("../script");

const wikia = new Command({

  name: "South Park Archives",
  description: "Searches https://southpark.wikia.com/",
  help: "**[prefix]w <search term>** to search the wiki for a South Park page!",
  thumbnail: "https://cdn.discordapp.com/attachments/209040403918356481/509092423087947817/t4.png",
  marketplace_enabled: true,

  type: "js",
  match_type: "command",
  match: "w",

  featured: false,

  preload: true,

  cb: function (client, message, guildDoc) {

    if (message.content.split(" ")[1] === undefined) {
      message.reply(`you're missing a query to search for, if you want to search for a random episode, use: ${guildDoc.settings.prefix}r`);
    }

    const query = message.content.substring(message.content.indexOf(" ") + 1);

    wikiaSearch(query).then(result => {
      const embed = new discord.RichEmbed()
        .setColor(0xff594f)
        .setAuthor("AWESOM-O // " + result.title, "https://cdn.discordapp.com/attachments/437671103536824340/462653108636483585/a979694bf250f2293d929278328b707c.png")
        .setURL(result.url)
        .setDescription(result.desc);

      if (result.thumbnail.indexOf(".png") !== -1) {
        embed.setThumbnail(result.thumbnail.substring(0, result.thumbnail.indexOf(".png") + 4));
      } else if (result.thumbnail.indexOf(".jpg") !== -1) {
        embed.setThumbnail(result.thumbnail.substring(0, result.thumbnail.indexOf(".jpg") + 4));
      } else if (result.thumbnail.indexOf(".jpeg") !== -1) {
        embed.setThumbnail(result.thumbnail.substring(0, result.thumbnail.indexOf(".jpeg") + 5));
      } else if (result.thumbnail.indexOf(".gif") !== -1) {
        embed.setThumbnail(result.thumbnail.substring(0, result.thumbnail.indexOf(".gif") + 4));
      } else {
        embed.setThumbnail(result.thumbnail);
      }

      message.channel.send(embed);

    }).catch(error => {
      message.reply(`fucking rip... ${error}`);
    });
  }
});

module.exports = wikia;
