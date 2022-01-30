const express = require('express');
const { check, oneOf } = require('express-validator');

const auth = require('../../middleware/auth');
const {
    getAllProjects,
    getUserProjects,
    createProject,
    deleteProject,
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

router.post(
    '/delete',
    [auth, [check('projectname', 'Project Name is required').not().isEmpty()]],
    deleteProject
);

module.exports = router;
