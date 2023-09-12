const Document = require('../models/Document');

exports.uploadDocument = async (req, res) => {
  const { title, content } = req.body;

  const document = new Document({
    title,
    content,
    owner: req.user._id,
  });

  await document.save();
  res.redirect('/dashboard');
};

exports.getDocument = async (req, res) => {
  const document = await Document.findById(req.params.id);
  res.json(document);
};