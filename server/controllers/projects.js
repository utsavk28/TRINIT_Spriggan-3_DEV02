const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/User');
const Project = require('../models/Project');

// Get All Project
const getAllProjects = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        const posts = await Project.find();
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

// Create Project
const createProject = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { projectname, descriptions } = req.body;

    try {
        const user = await User.findById(req.user.id).select('-password');

        if (!user)
            return res.status(400).json({
                errors: [{ msg: 'User Not Found' }],
            });

        project = await Project.findOne({ projectname });

        if (project) {
            return res.status(400).json({
                errors: [{ msg: 'Project Already Exists' }],
            });
        }

        project = new Project({
            projectname,
            descriptions,
            project_owner: {
                user: user,
            },
            users: [
                {
                    user: user,
                },
            ],
        });

        project = await project.save();

        res.json(project);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

// Delete Project
const deleteProject = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { projectname } = req.body;

    try {
        const project = await Project.findOne({
            projectname,
        });

        
        if (!project) {
            return res.status(400).json({
                errors: [{ msg: 'Project Not Found' }],
            });
        } else if (String(project.project_owner.user) !== String(req.user.id)) {
            return res.status(400).json({
                errors: [{ msg: 'You are not the owner of this project' }],
            });
        }

        await project.remove();

        res.json({
            msg: 'Project Deleted',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

module.exports = { getAllProjects, createProject, deleteProject };
