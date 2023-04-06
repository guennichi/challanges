const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true },
});





const Todo = mongoose.model('todo',TodoSchema);
module.exports= Todo;