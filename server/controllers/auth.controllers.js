// const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { validationResult} = require('express-validator');


const privatekey = 'Camhive';

// function for  createuser

async function createUser(req , res) {

    let success = false;

    const errors = validationResult(req);                           // this returns array of errors

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array()});
    }

    // check for user which exist already

    const { email , password} = req.body;

    let user = await User.findOne({ email : email});

    if (user) {
        return res.status(400).json({
            error : 'user already exist'
        })
    }

    const salt =  await bcrypt.genSalt(10);
    const saltedPass = await bcrypt.hash(password , salt);

    // if user not exist

    user = await User.create({
        email : email,
        password : saltedPass
    })

    // auth-token

    let data = {
        user:{
            id : user.id
        }
    }

    const token = jwt.sign(data , privatekey);

    success = true;

    res.status(201).json({success,token});
}

// function for user login

async function logIn(req,res) {
    
    let success = false;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array()});
    }

    const { email , password} = req.body;

    try {
        const user = await User.findOne({email:email});

        if (!user) {
            return res.status(400).json({ error : 'Invalid credentials'});
        }

        const salt =  await bcrypt.genSalt(10);
        const saltedPass = await bcrypt.hash(password , salt);

        const passwordToCompare = await bcrypt.compare(password , user.password);

        if (!passwordToCompare) {
            return res.status(400).json({ error : 'Invalid credentials'})
        }

        // auth-token

        let data = {
            user :{
                id : user.id,
            }
        }

        const token = jwt.sign(data , privatekey);

        success = true;

        res.status(200).json({success , token});

        
    } catch (err) {
        console.log(err);
        res.status(500).json('Internal server error')
    }
}

module.exports = {
    createUser,
    logIn,
}