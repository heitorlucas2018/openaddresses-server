import Logger from './console/console';
const { MongoClient } = require("mongodb");

// Connection URI
//const uri ="mongodb+srv://root:example@mongo:27017/?maxPoolSize=20&w=majority";
const uri ="mongodb://root:example@mongo:27017/?maxPoolSize=20&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    Logger.info("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    Logger.info("Closed connection to server");
    await client.close();
  }
}
run().catch(console.dir);
