const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'LearnProgram';

MongoClient.connect(url, (err, client) => {
    if(err){
        return console.log(err);
    }
    console.log('Connected succesfully to mongodb');

    const db = client.db(dbName);
    const collection = db.collection(dbName);

    collection.insertOne({
        name : 'raveem'
    }, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('Inserted a document into the collection!');
    });

    client.close();
});