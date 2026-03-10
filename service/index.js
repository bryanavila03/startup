const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.get('/ping', (req, res) => {
  res.json({ message: 'Server working!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

let users = [];
const apiRouter = express.Router();
app.use('/api', apiRouter);