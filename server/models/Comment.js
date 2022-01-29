const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

let Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;
