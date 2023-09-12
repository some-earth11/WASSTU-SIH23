const axios = require('axios');
const Document = require('../models/Document');

const document = new Document();

exports.uploadDocument = (req, res) => {
  const { file } = req.body;
  const documentText = file;

  axios.post('https://api.openai.com/v1/completions', {
    model: 'davinci',
    prompt: documentText,
    max_tokens: 150,
    temperature: 0.7,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`
    }
  })
    .then((response) => {
      document.summary = response.data.choices[0].text.trim();
      document.queries = [];
      res.json({ message: 'Document processed successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing the document' });
    });
};

exports.queryDocument = (req, res) => {
  const { query } = req.body;

  axios.post('https://api.openai.com/v1/completions', {
    model: 'davinci',
    prompt: `Document Summary: ${document.summary}\nQuery: ${query}\n`,
    max_tokens: 50,
    temperature: 0.7,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`
    }
  })
    .then((response) => {
      const queryResponse = response.data.choices[0].text.trim();
      document.queries.push({ query, response: queryResponse });
      res.json({ response: queryResponse });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing the query' });
    });
};
