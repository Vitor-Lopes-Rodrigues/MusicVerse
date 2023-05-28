const { Router } = require('express')
const auth = require("../config/auth")
const LikesController = require("../controllers/LikesController");
const router = Router()

router
    .get('/likes/:postId', auth, LikesController.getAllLikesByPost)
    .post('/like', auth, LikesController.saveLike)
    .delete('/like/:postId/:userId', auth, LikesController.deleteLike)

module.exports = router