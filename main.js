const axios = require('axios');
const messages = require('./messages');

require('dotenv').config();

(async () => {
  const res = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0,
  }, {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });
  const { data } = res;
  const [choice] = data.choices;
  const { message } = choice;
  console.log(message);
})();
