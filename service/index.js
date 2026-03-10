const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Server working!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});