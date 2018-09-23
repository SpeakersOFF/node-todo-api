var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlenth: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt : {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
};

// var newTodo = new Todo({
//     text: 'cook dinner',

// });

// newTodo.save().then((doc) => {
//     console.log('save todo',doc);
// }, (e) => {
//     console.log('errrrrrrrrrrr');
// });

// var otherTodo = new Todo({
//     text : 23
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc,undefined,2));
// },(e) => {
//     console.log('errrrrr',e)
// });