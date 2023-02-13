const express = require('express');
const { body } = require('express-validator');

const { createUser} = require('../controllers/auth.controllers');

const authRoute = express.Router();

authRoute.post('/createuser' ,
    body('email' , 'enter valid email').isEmail() , 
    body('password','enter a valid password').isLength({min:8}) ,
    createUser
)

module.exports = {
    authRoute,
}