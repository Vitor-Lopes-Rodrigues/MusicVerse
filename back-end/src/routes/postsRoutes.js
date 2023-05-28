const { Router } = require('express')
const auth = require("../config/auth")
const PostsController = require("../controllers/PostsController");
const router = Router()

router
    .get('/posts', auth, PostsController.getAllPosts)
    .get('/post/:id', auth, PostsController.getPost)
    .post('/post', auth, PostsController.savePost)
    .put('/post/:id', auth, PostsController.updatePost)
    .delete('/post/:id', auth, PostsController.deletePost)

module.exports = router