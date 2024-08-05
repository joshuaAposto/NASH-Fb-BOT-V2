const axios = require('axios');

module.exports = {
  name: 'catfact',
  description: 'random cat fact',
  usage: '[nashPrefix]catfact',
  nashPrefix: true,
  execute: async (api, event, args, prefix) => {
    try {
      const response = await axios.get(`${global.NashBot.ENDPOINT}cat-fact`);
      const catFact = response.data.data[0];

      if (catFact) {
        await api.sendMessage(`${catFact}`, event.threadID);
      } else {
        await api.sendMessage('No cat facts found.', event.threadID);
      }
    } catch (error) {
      console.error('Error fetching or sending the cat fact:', error);
      await api.sendMessage('An error occurred while fetching the cat fact.', event.threadID);
    }
  }
};