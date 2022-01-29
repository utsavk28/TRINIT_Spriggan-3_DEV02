const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BugSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    descriptions: {
        type: String,
        required: true,
        
    },
    status: {
        type: String,
    },
    threat_level: {
        type: String,
    },
    assigned_to: {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    created_by: {
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
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'project',
    },
    deadline:{
        type:Date,
        default:Date.now,
    },
    role_id:{
        type:Number,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

let Bug = mongoose.model('bug', BugSchema);

module.exports = Bug;
