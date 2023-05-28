const bodyParser = require('body-parser')
const users = require('./usersRoutes')
const followers = require('./followersRoutes')
const posts = require('./postsRoutes')
const likes = require('./likesRoutes')

module.exports = app => {
    app
        .use(bodyParser.json())
        .use(users)
        .use(followers)
        .use(posts)
        .use(likes)
}

