const express = require('express');
const { check } = require('express-validator');

const auth = require('../../middleware/auth');
const { reportComments, getAllComments,getSpecificComments,updateComments ,deleteComments,getBugComments} = require('../../controllers/comments.js');
const User = require('../../models/Comment');

const router = express.Router();

//get All comments
router.get('/', getAllComments);

//get specific comments
router.get('/:commentId',getSpecificComments);

//get specific post for specific bug
router.get('/bug/:bugId',getBugComments);

//update comments
router.patch('/:commentId',updateComments);

//Adding the comment
router.post('/',[
    auth,
    [
        check('description', 'Description is required').not().isEmpty(),
        check('bugId', 'bugId is required').not().isEmpty(),
    ],
],
reportComments);

//deleting the comment
router.delete('/:commentId',deleteComments);

module.exports = router;