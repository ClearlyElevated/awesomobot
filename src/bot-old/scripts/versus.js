"use strict";

const Command = require("../script");

const characters = [
  "Towelie",
  "Tweek Tweak",
  "Stephen Stotch",
  "Jesus Christ",
  "Scott Tenorman",
  "Stan Marsh",
  "Eric Cartman",
  "ManBearPig",
  "6th Grader",
  "Kenny McCormick",
  "Jerome 'Chef' McElroy",
  "Kyle Broflovski",
  "Saddam Hussein",
  "Wendy Testaburger",
  "PC Principal",
  "Craig Tucker",
  "Satan",
  "Underpants Gnome",
  "Mr. Kitty",
  "Butters Stotch",
  "Dogpoo",
  "Clyde Donovan",
  "Mecha Streisand",
  "Bebe Stevens",
  "Pip Pirrup",
  "Cthulhu",
  "Randy Marsh",
  "One Rat",
  "Damien",
  "Liane Cartman",
  "A.W.E.S.O.M.-O 4000",
  "Tricia",
  "Nelly",
  "GS-401",
  "Shub-Niggurath",
  "Nathan",
  "Mimsy",
  "Classi",
  "Scuzzlebutt",
  "Terrance",
  "Phillip",
  "Barbra Streisand",
  "Santa Claus",
  "Sheila Broflovski",
  "Shelly Marsh",
  "Gerald Broflovski",
  "Scott Malkinson",
  "Russel Crowe",
  "Bat Dad",
  "Brimmy",
  "Rob Schneider",
  "Selena Gomez",
  "Mitch Connor",
  "Dougie O'Connel",
  "Mr. Mackey",
  "Sexual Harassment Panda",
  "Kanye West",
  "Mr. Garrison",
  "Strong Woman",
  "Mr. Hankey",
  "Mr. Mackey",
  "Henrietta",
  "Firkle",
  "Michael",
  "Pete",
  "Kyle Schwartz",
  "King Douchebag",
  "Brimmy",
  "Jared Fogle",
  "Jenkins",
  "Dildo Shwaggins",
  "Mr. Slave",
  "Tardicaca Shark",
  "Marklar",
  "Filmore",
  "Ike Broflovski",
  "Penis Mouse",
  "Blanket",
  "Corey Haim",
  "Bradley Biggle",
  "Reality",
  "Iggy Azalea",
  "Reality",
  "Mr. Derp",
  "Peter Mullen",
  "Dr. Nelson",
  "Snooki",
  "Bono",
  "Ben Assfleck",
  "Heroin Dragon",
  "Scott",
  "Ugly Bob"
];

const versus = new Command({

  name: "South Park Versus",
  description: "Picks two random characters and makes them fight to the death!",
  help: "**[prefix]versus** to pit two random South Park characters against each other!",
  thumbnail: "https://cdn.discordapp.com/attachments/430447280932388865/531209921350336538/south-park-s05e03c09-cripple-fight-16x9.jpg",
  marketplace_enabled: true,

  type: "js",
  match_type: "command",
  match: "versus",

  featured: false,

  preload: true,

  cb: function (client, message) {

    const random1 = Math.floor(Math.random() * characters.length);
    const random2 = Math.floor(Math.random() * characters.length);
    message.channel.send("**Who would win:** " + characters[random1] + " **or** " + characters[random2] + "?").then(function () {
      if (characters[random1] == characters[random2]) {
        message.channel.send("*This wasn't meant to happen but here we are...*");
      }
    });
  }
});

module.exports = versus;
