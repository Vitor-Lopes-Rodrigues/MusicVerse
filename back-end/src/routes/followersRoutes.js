const { Router } = require('express')
const FollowersController = require("../controllers/FollowersController");

const router = Router()

router
    .get('/followers/:id', FollowersController.getAllFollowersByUser)

module.exports = router