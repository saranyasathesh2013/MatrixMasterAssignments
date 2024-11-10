const express = require('express');
const route = express.Router();
const myFunction = require('../controller/functionController')

route.get('/', myFunction.getAllPosts);
route.post('/save-post', myFunction.savePost);
route.get('/delete/post/:id',myFunction.deletePost)
module.exports = route