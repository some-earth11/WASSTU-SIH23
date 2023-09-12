const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/legal_document_website', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'your-secret-key', // Change this to a secure secret
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

app.use(passport.initialize());
app.use(passport.session());

// Load routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/documents', require('./routes/documentRoutes'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});