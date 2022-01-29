const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/User');
const Bug = require('../models/Bug');
const Project = require('../models/Project');

// Get All Bugs
const getAllBugs = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        const posts = await Bug.find();
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

//Get specific bug by id
const getSpecificBugs = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        const posts = await Bug.findById(req.params.bugId);
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

//Update Bug
const updateBugs = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        let posts = await Bug.findById(req.params.bugId);
        posts.title=req.body.title;
        posts.descriptions=req.body.descriptions;
        posts.status=req.body.status;
        posts.threat_level=req.body.threat_level;
        posts.assigned_to=req.body.assigned_to;
        
        posts.created_by=req.body.created_by;
        posts.thread=req.body.thread;
        posts.projectId=req.body.projectId;

        posts=await posts.save();
        res.json(posts);

    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

const check = (bugs, id) => {
    let n = bugs.length;
    for (let i = 0; i < n; i++) {
        if (String(bugs[i].created_by.user) === String(id)) {
            return true;
        }
    }
    return false;
};

// Report Bug
const reportBugs = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { title, descriptions,projectId } = req.body;

    try {
        const user = await User.findById(req.user.id).select('-password');
        const project = await Project.findById(projectId);

        if (!user)
            return res.status(400).json({
                errors: [{ msg: 'User Not Found' }],
            });

        if (!project)
            return res.status(400).json({
                errors: [{ msg: 'Project Not Found' }],
            });

        let bug = await Bug.find({
            title,
            projectId
            // created_by: user,
        });

        if (bug.length > 0 && check(bug, user.id)) {
            return res.status(400).json({
                errors: [{ msg: 'Bug Already Reported by you' }],
            });
        }

        bug = new Bug({
            title,
            descriptions,
            projectId,
            created_by: {
                user: user,
            },
        });

        bug = await bug.save();

        res.json(bug);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};
//project specific bug
const getProjectSpecificBugs = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        const posts = await Bug.find({projectId:req.params.projId}).sort({
            created_at:-1,
        });
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};


// Delete Bug
const deleteBug = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { bugId } = req.body;

    try {
        let bug = await Bug.findById(bugId);
        console.log(bug);

        if (!bug) {
            return res.status(400).json({
                errors: [{ msg: 'Bug does not exists' }],
            });
        } else if (String(bug.created_by.user) !== String(req.user.id)) {
            return res.status(400).json({
                errors: [{ msg: 'You are not the owner of this bug' }],
            });
        }

        await bug.remove();

        res.json({
            msg: 'Bug Deleted',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

module.exports = { getAllBugs, reportBugs, deleteBug,getSpecificBugs,updateBugs ,getProjectSpecificBugs};
