const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

router.post('/upload_document', documentController.uploadDocument);
router.post('/query_document', documentController.queryDocument);

module.exports = router;
