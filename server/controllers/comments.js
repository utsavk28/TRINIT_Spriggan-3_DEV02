const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const Comment = require('../models/Comment');
const User = require('../models/User');
const Bug = require('../models/Bug');
const Project = require('../models/Project');

//displaying all the comments
const getAllComments = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        const posts = await Comment.find();
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};


//displaying comments for specific id
const getSpecificComments = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        const posts = await Comment.findById(req.params.commentId);
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

//updating the comments
const updateComments = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        let posts = await Comment.findById(req.params.commentId);
        posts.description=req.body.description;
        posts.bugId=req.body.bugId;
        posts.projectId=req.body.projectId;
        posts.author=req.body.author,

        posts=await posts.save();
        res.json(posts);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};



//checking validation for comments
const reportComments =async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const {  description,projectId,bugId } = req.body;

    try {
        const user = await User.findById(req.user.id).select('-password');
        const project = await Project.findById(projectId);
        const bug=await Bug.findById(bugId);
        if (!user)
            return res.status(400).json({
                errors: [{ msg: 'User Not Found' }],
            });

        if (!project)
            return res.status(400).json({
                errors: [{ msg: 'Project Not Found' }],
            });
          
            if (!bug)
            return res.status(400).json({
                errors: [{ msg: 'Bug Not Found' }],
            });    
        let comment = await Comment.find({
            description,
            projectId
        });

        if (comment.length > 0 && check(comment, user.id)) {
            return res.status(400).json({
                errors: [{ msg: 'Comment Already Reported by you' }],
            });
        }

        comment = new Comment({
            description,
            projectId,
            bugId,
            author: {
                user: user,
            },
        });

        comment = await comment.save();

        res.json(comment);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

//Delete comment
const deleteComments = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { commentId } = req.params;

    try {
        const comment = await Comment.findById(commentId);

        
        if (!comment) {
            return res.status(400).json({
                errors: [{ msg: 'Comment not found' }],
            });
        
        }

        await comment.remove();

        res.json({
            msg: 'Comment Deleted',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

module.exports = { reportComments,getAllComments,getSpecificComments,updateComments,deleteComments};