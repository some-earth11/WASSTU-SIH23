const openai = require('openai');
const Document = require('../models/Document');

const OpenAIAPI = new openai.OpenAIAPI({
  key: process.env.OPENAI_API_KEY,
});

const document = new Document();

exports.uploadDocument = (req, res) => {
  const { file } = req.body;
  const documentText = file;

  OpenAIAPI.complete({
    engine: 'davinci',
    prompt: documentText,
    max_tokens: 150,
    temperature: 0.7,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })
    .then((response) => {
      document.setSummary(response.choices[0].text.trim());
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

  OpenAIAPI.complete({
    engine: 'davinci',
    prompt: `Document Summary: ${document.summary}\nQuery: ${query}\n`,
    max_tokens: 50,
    temperature: 0.7,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })
    .then((response) => {
      const queryResponse = response.choices[0].text.trim();
      document.addQuery(query, queryResponse);
      res.json({ response: queryResponse });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing the query' });
    });
};
