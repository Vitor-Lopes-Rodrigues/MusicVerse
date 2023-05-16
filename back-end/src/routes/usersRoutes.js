const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const auth = require("../config/auth")
const router = Router()

router
    .get('/users', auth, UsersController.getAllUsers)
    .get('/user/:id', auth, UsersController.getUser)
    .post('/user', UsersController.saveUser)
    .put('/user/:id', auth, UsersController.updateUser)
    .delete('/user/:id', auth, UsersController.deleteUser)
    .post('/login', UsersController.login)

module.exports = router