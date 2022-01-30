const express = require('express');
//const User1=require('../../models/User');
const { check } = require('express-validator');

const { registerUser,updateUser } = require('../../controllers/users.js');
const User = require('../../models/User');

const router = express.Router();

router.post(
    '/',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('email', 'Please include a valid Email').isEmail(),
        check(
            'password',
            'Please enter a password of length more than 6'
        ).isLength({ min: 6 }),
        // check('contact','Contact is required').not().isEmpty(),
    ],
    registerUser
);

router.get('/',async(req,res)=>{
    try{
        const user=await User.find();
        res.json(user);
    }catch(err){
        res.json({message:err});
    }
});
//Getting details of particular user
router.get('/:userId',async(req,res)=>{
    try{
    const user=await User.findById(req.params.userId);
    res.json(user);
    }catch(err){
        res.json({message:err});
    }
});

//updating the email,phone,password,contact
router.patch('/:userId',updateUser);


module.exports = router;
