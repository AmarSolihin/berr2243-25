const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("testDB");
        const users = db.collection("users");

        const result = await users.insertOne({ name: "Amar", age: 22 });
        console.log(`Document inserted with _id: ${result.insertedId}`);

        const findResult = await users.findOne({ _id: result.insertedId });
        console.log("Found Document:", findResult);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

run();
