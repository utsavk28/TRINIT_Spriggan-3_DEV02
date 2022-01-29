const express = require('express');
const { check, oneOf } = require('express-validator');

const auth = require('../../middleware/auth');
const { getAllBugs, reportBugs,deleteBug,getSpecificBugs,updateBugs,getProjectSpecificBugs } = require('../../controllers/bugs');

const router = express.Router();

router.get('/', getAllBugs);

router.post(
    '/',
    [
        auth,
        [
            check('title', 'Title is required').not().isEmpty(),
            check('descriptions', 'Description is required').not().isEmpty(),
            check('projectId', 'projectId is required').not().isEmpty(),
        ],
    ],
    reportBugs
);

router.post(
    '/delete',
    [
        auth,
        [
            check('bugId', 'Bug Id').not().isEmpty(),
        ],
    ],
    deleteBug
);

//get specific bug
router.get('/:bugId',getSpecificBugs);

//update specific bug
router.patch('/:bugId',updateBugs);

//get specific bugs using project id
router.get('/project/:projId',getProjectSpecificBugs);
module.exports = router;
