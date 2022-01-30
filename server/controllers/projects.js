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
        const projects = await Project.find()
            .populate({
                path: 'project_owner',
                populate: {
                    path: 'user',
                },
            })
            .populate({
                path: 'users',
                populate: {
                    path: 'user',
                },
            })
            .populate({
                path: 'bugs',
                populate: {
                    path: 'bug',
                },
            })
            .exec();

        // console.log(projects.populated('project_owner'));
        res.json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

// Get Project
const getProjectById = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        const projects = await Project.findById(req.params.projectId)
            .populate({
                path: 'project_owner',
                populate: {
                    path: 'user',
                },
            })
            .populate({
                path: 'users',
                populate: {
                    path: 'user',
                },
            })
            .populate({
                path: 'bugs',
                populate: {
                    path: 'bug',
                },
            })
            .exec();

        // console.log(projects.populated('project_owner'));
        res.json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

// Get User Projects
const getUserProjects = async (req, res) => {
    // console.log(req.user.id);
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        const projects = await Project.find()
            .populate({
                path: 'project_owner',
                populate: {
                    path: 'user',
                },
            })
            .populate({
                path: 'users',
                populate: {
                    path: 'user',
                },
            })
            .populate({
                path: 'bugs',
                populate: {
                    path: 'bug',
                },
            })
            .exec();

        let userProjects = [];
        for (let i = 0; i < projects.length; i++) {
            const users = projects[i].users.map((user) =>
                String(user.user._id)
            );
            // console.log(users);

            if (users.includes(String(req.user.id)))
                userProjects.push(projects[i]);
        }
        // console.log(userProjects.length,projects.length);
        res.json(userProjects);
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
                    level: 10,
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

    const { projectname } = req.params;

    try {
        let project = await Project.findById(projectId);

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

// Join Project
const joinProject = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { projectId } = req.params;

    try {
        let project = await Project.findById(projectId);

        if (!project) {
            return res.status(400).json({
                errors: [{ msg: 'Project Not Found' }],
            });
        }

        for (let i = 0; i < project.users.length; i++) {
            if (String(project.users[i].user) === String(req.user.id)) {
                return res.status(400).json({
                    errors: [
                        { msg: 'You are already a member of this project' },
                    ],
                });
            }
        }

        project.users.push({
            user: req.user.id,
        });

        project = await project.save();
        res.json({
            msg: 'Project Joined',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    deleteProject,
    getUserProjects,
    joinProject,
};
