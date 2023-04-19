const { Router } = require('express')
const UsersController = require('../controllers/UsersController')

const router = Router()

router
    .get('/users', UsersController.getAllUsers)
    .get('/user/:id', UsersController.getUser)
    .post('/user', UsersController.saveUser)
    .put('/user/:id', UsersController.updateUser)
    .delete('/user/:id', UsersController.deleteUser)

module.exports = router