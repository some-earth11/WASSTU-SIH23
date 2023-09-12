const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const documentRoutes = require('./routes/documentRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/documents', documentRoutes); // Mount documentRoutes to '/documents' path

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});