"use strict";

const Command = require("../script");

const fuckyourself = new Command({

  name: "Fuck Yourself",
  description: "Can we copystrike Feinwaru?",
  help: "**[prefix]fuckyourself** to show a funny image!",
  thumbnail: "https://cdn.discordapp.com/attachments/379432139856412682/487740516755177472/unknown.png",
  marketplace_enabled: true,

  type: "js",
  match_type: "command",
  match: "fuckyourself",

  featured: false,

  preload: true,

  cb: function(client, message) {

    message.channel.send("", {
      file: "https://cdn.discordapp.com/attachments/379432139856412682/487740516755177472/unknown.png"
    });
  }
});

module.exports = fuckyourself;
