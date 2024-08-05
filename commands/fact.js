const axios = require("axios");

module.exports = {
  name: "fact",
  description: "Get a random fact",
  aliases: [],
  cooldown: 5,
  nashPrefix: false,
  execute: async (api, event, args) => {
    const { threadID, messageID } = event;
    const apiUrl = `${global.NashBot.ENDPOINT}fact`;

    try {
      const response = await axios.get(apiUrl);
      const fact = response.data.fact;

      if (!fact) {
        return api.sendMessage("❌ ayaw niya bay hayst.", threadID, messageID);
      }

      const message = `
━━━━━━━━━━━━━━━━━━━
📜 𝐑𝐚𝐧𝐝𝐨𝐦 𝐅𝐚𝐜𝐭 📜
━━━━━━━━━━━━━━━━━━━
${fact}
━━━━━━━━━━━━━━━━━━━
      `;
      api.sendMessage(message, threadID, messageID);
    } catch (error) {
      console.error('Error fetching fact:', error);
      api.sendMessage("❌ An error occurred while fetching the fact. Please try again later.", threadID, messageID);
    }
  }
};