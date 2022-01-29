const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BugSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
    assigned_to: {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    thread: [
        {
            comment: {
                type: Schema.Types.ObjectId,
                ref: 'comment',
            },
        },
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },
});

let Bug = mongoose.model('bug', BugSchema);

module.exports = Bug;
