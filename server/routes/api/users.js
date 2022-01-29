const express = require('express');
//const User1=require('../../models/User');
const { check } = require('express-validator');

const { registerUser } = require('../../controllers/users.js');
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
    ],
    registerUser
);

router.get('/',async(req,res)=>{
    try{
    const user=await User.find();
    res.json(post);
    }catch(err){
        res.json({message:err});
    }
});
//Getting details of particular user
router.get('/:userId',async(req,res)=>{
    try{
    const user=await User.findById(req.params.userId);
    res.json(post);
    }catch(err){
        res.json({message});
    }
});

//updating the email
router.patch('/:userId',async(req,res)=>{
    try{
        const updateUser=await User.updateOne({_id:req.params.userId},
            {$set:{email:req.body.email}})
    }catch(err){
        res.json({message:err});
    }
});

//updating the phone number
router.patch('/:userId',async(req,res)=>{
    try{
        const updateUser=await User.updateOne({_id:req.params.userId},
            {$set:{contact:req.body.contact}})
    }catch(err){
        res.json({message:err});
    }
});

//Updating the password
router.patch('/:userId',async(req,res)=>{
    try{
        const updateUser=await User.updateOne({_id:req.params.userId},
            {$set:{password:req.body.password}})
    }catch(err){
        res.json({message:err});
    }
});
module.exports = router;
