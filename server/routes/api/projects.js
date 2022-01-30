const express = require('express');
const { check, oneOf } = require('express-validator');

const auth = require('../../middleware/auth');
const {
    getAllProjects,
    getUserProjects,
    createProject,
    deleteProject,
    joinProject
} = require('../../controllers/projects');

const router = express.Router();

router.get('/', getAllProjects);

router.get('/user', auth, getUserProjects);

router.post(
    '/',
    [
        auth,
        [
            check('projectname', 'Project Name is required').not().isEmpty(),
            check('descriptions', 'Description is required').not().isEmpty(),
        ],
    ],
    createProject
);

router.post('/delete/:projectId', auth, deleteProject);

router.put('/join/:projectId', auth, joinProject);

module.exports = router;
