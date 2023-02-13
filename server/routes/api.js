const express = require('express');
const { authRoute } = require('./auth.route');

const api = express.Router();

api.use('/auth' , authRoute);

module.exports = api;