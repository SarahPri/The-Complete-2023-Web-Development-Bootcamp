// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// //connection URL
// const url = "mongodb://localhost:27017";

// //database Name
// const dbName = "fruitsDB";

// //create a new MongoClient
// const client = new MongoClient(url);

// //use connect method to connect to the server
// client.connect(function (err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });

const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "fruitsDB";

// Create a new MongoClient
const client = new MongoClient(url);

async function insertDocuments(db) {
  const collection = db.collection("fruits");

  // Insert multiple documents
  const result = await collection.insertMany([
    { name: "Apple", score: 8, review: "Great fruit" },
    { name: "Orange", score: 6, review: "Kinda Sour" },
    { name: "Banana", score: 9, review: "Great stuff" },
  ]);

  console.log(`Inserted ${result.insertedCount} documents into the collection`);
}

async function connectToDatabase() {
  try {
    // Connect to the server
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // Call the insertDocuments function
    await insertDocuments(db);
  } catch (err) {
    console.error("Failed to connect to the server:", err);
  } finally {
    // Close the connection
    await client.close();
  }
}

connectToDatabase();
