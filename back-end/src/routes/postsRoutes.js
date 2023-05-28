const { Router } = require('express')
const auth = require("../config/auth")
const PostsController = require("../controllers/PostsController");
const router = Router()

router
    .get('/posts', auth, PostsController.getAllPosts)
    .post('/post', auth, PostsController.saveUser)

module.exports = router