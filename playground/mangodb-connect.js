//const MongoClient = require('mongodb').MongoClient; ...../same as bottom
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('connected to mongoDB server');

    //---------------todo database--------------------//
    // db.collection('Todos').insertOne({
    //     text:'something to do ',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo ',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    //------------------user collection------------------------//

    // db.collection('Users').insertOne({
    //     name: 'Andrew',
    //     age:25,
    //     location: 'Philadelphia'
    // },(err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo ',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});