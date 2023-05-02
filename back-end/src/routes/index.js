const bodyParser = require('body-parser')
const users = require('./usersRoutes')
const followers = require('./followersRoutes')

module.exports = app => {
    app
        .use(bodyParser.json())
        .use(users)
        .use(followers)
}

