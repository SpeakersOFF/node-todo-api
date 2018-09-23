//const MongoClient = require('mongodb').MongoClient; ...../same as bottom
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('connected to mongoDB server');

    
        // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        //     console.log('todos');
        //     console.log(JSON.stringify(docs,undefined,2));
        // }, (err) => {
        //     console.log('Unable to fetch todo',err)
        // });

        //----------------------deleteMany------------------------------------------//
        // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
        //     console.log(result);

        // });

        //----------------------deleteOne---------------------------------------//

        // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
        //     console.log(result);
        // });

        //---------------------findOneDeleteOne-----------------------//

        db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
            console.log(result);
        });


        
    
    db.close();
});