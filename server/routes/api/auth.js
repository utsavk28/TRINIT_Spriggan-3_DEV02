const express = require('express');
const { check, oneOf } = require('express-validator');

const auth = require('../../middleware/auth');
const { loginUser, loadUser } = require('../../controllers/auth');

const router = express.Router();

router.get('/', auth, loadUser);

router.post(
    '/',
    [
        oneOf([
            check(
                'email',
                'Please include a valid Email or Username'
            ).isEmail(),
            check('username', 'Please include a valid Email or Username')
                .not()
                .isEmpty(),
        ]),
        check('password', 'Please check your Password').exists(),
    ],
    loginUser
);

module.exports = router;
