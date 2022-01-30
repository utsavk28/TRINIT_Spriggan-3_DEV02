const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectname: {
        type: String,
        required: true,
        unique: true,
    },
    descriptions: {
        type: String,
        required: true,
        unique: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    project_owner: {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        // required: true,
    },
    users: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
            level: {
                type: Number,
            },
        },
    ],
    labels: [
        {
            type: String,
        },
    ],
    bugs: [
        {
            bug: {
                type: Schema.Types.ObjectId,
                ref: 'bug',
            },
        },
    ],
});

let Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
