const fs = require("fs");
module.exports.config = {
  name: "admin2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Riya Roy", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "admin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("ADMIN")==0 || event.body.indexOf("Admin")==0 || event.body.indexOf("/Admin")==0 || event.body.indexOf("#admin")==0) {
    var msg = {
        body: "👸 𝐎𝐖𝐍𝐄𝐑÷ 𝗥𝗶𝗬𝗮 𝗥𝗼𝗬 👸",
        attachment: 
fs.createReadStream(__dirname + `/noprefix/riya2.png.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👸", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
