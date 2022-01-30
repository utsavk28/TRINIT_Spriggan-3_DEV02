const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    bugId:{
        type:String,
        bug:{
            type:Schema.Types.ObjectId,
            ref:'bug',
        },
    },
    projectId:{
        type:String,
        project:{
            type:Schema.Types.ObjectId,
            ref:'project',
        },
    },
    author: {
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
