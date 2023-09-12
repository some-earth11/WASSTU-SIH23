const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: String,
  content: String,
  summary: String,
  queries: [{ question: String, answer: String }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Document', documentSchema);