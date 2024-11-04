const express = require('express');
const route = express.Router();
const myFunction = require('../controller/functionController')

route.get('/', myFunction.getAllPosts);
//console.log(myFunction.getAllPosts);

module.exports = route