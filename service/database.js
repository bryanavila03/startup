const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');

const uri = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('PhoenixPests');
const usersCollection = db.collection('users');
const appointmentsCollection = db.collection('appointments');
const contactCollection = db.collection('contact');