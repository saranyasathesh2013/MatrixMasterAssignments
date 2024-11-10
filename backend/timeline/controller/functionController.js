
const post =require('../model/postModel')


const getAllPosts = (req, res) => {
    post.find()
    .then(result => {
    res.render("index", {postsInfo : result});
    })
    .catch(error => console.log(error));
}

const savePost = (req, res) => {
    let newPost = new post(req.body)
    newPost.save()
    .then(() => {
        res.redirect('/')
    })
    .catch((error) => console.log(error))
    
}

const deletePost = (req, res) => {
    
    post.findByIdAndDelete(req.params.id)
    .then(() =>
    res.redirect('/'))
    .catch(error => console.log(error))
}

module.exports = { getAllPosts,
                    savePost,
                    deletePost
                 };