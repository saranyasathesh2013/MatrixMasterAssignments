const posts = require('../model/Post') 


const getAllPosts = (req, res) => {
    //res.status(200).send(posts);
    res.render("index", {postsInfo:posts});
}

module.exports = { getAllPosts };