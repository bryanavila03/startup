const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('PhoenixPests');

const usersCollection = db.collection('users');
const appointmentsCollection = db.collection('appointments');
const contactCollection = db.collection('contact');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log('Connected to database');
  } catch (ex) {
    console.log(`Unable to connect to database: ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return usersCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return usersCollection.findOne({ token: token });
}

async function addUser(user) {
  await usersCollection.insertOne(user);
}

async function updateUser(user) {
  await usersCollection.updateOne({ email: user.email }, { $set: user });
}

async function addAppointment(appointment) {
  await appointmentsCollection.insertOne(appointment);
}
async function getAppointments() {
  return appointmentsCollection.find().toArray();
}

async function saveContact(contact) {
  await contactCollection.updateOne({}, { $set: contact }, { upsert: true });
}

async function getContact() {
  return contactCollection.findOne({});
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addAppointment,
  getAppointments,
  saveContact,
  getContact,
};