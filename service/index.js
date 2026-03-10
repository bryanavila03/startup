const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

const app = express();