const { Router } = require('express')
const auth = require("../config/auth")
const PostsController = require("../controllers/PostsController");
const router = Router()

router
    .get('/posts', auth, PostsController.getAllPosts)

module.exports = router