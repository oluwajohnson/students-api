const { MongoClient } = require('mongodb');
require('dotenv').config();

let db;

const client = new MongoClient(process.env.MONGODB_URI);

const initDb = async () => {
  if (db) return;

  try {
    await client.connect();
    db = client.db();
    console.log("Database connected");
  } catch (err) {
    console.error(err);
  }
};

const getDb = () => db;

module.exports = { initDb, getDb };