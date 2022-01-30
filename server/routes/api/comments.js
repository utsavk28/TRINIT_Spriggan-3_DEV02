const express = require('express');
const { check } = require('express-validator');

const auth = require('../../middleware/auth');
const { reportComments, getAllComments,getSpecificComments,updateComments ,deleteComments} = require('../../controllers/comments.js');
const User = require('../../models/Comment');

const router = express.Router();

//get All comments
router.get('/', getAllComments);

//get specific comments
router.get('/:commentId',getSpecificComments);

//update comments
router.patch('/:commentId',updateComments);

//Adding the comment
router.post('/',[
    auth,
    [
        check('description', 'Description is required').not().isEmpty(),
        check('bugId', 'projectId is required').not().isEmpty(),
    ],
],
reportComments);

//deleting the comment
router.delete('/:commentId',deleteComments);

module.exports = router;