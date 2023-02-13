// const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { validationResult} = require('express-validator');


const privatekey = 'Camhive';

// function to createuser

async function createUser(req , res) {

    let success = false;

    const errors = validationResult(req);                           // this returns array of errors

    if (!errors.isEmpty()) {
        res.status(400).json({ errors : errors.array()});
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

    let data = {
        user:{
            id : user.id
        }
    }

    const token = jwt.sign(data , privatekey);

    success = true;

    res.json({success,token});
}

module.exports = {
    createUser,
}