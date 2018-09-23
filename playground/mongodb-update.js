//const MongoClient = require('mongodb').MongoClient; ...../same as bottom
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('connected to mongoDB server');

    
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5ba6c701bb4ed6580a5ae00b")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });
    
    db.close();
});