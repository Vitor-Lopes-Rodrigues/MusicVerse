const database = require('../models')

class PostsController {

    //Buscar todos os usuarios
    static async getAllPosts(req, res){
        try{
            const allPosts = await database.Posts.findAll()
            return res.status(200).json(allPosts)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PostsController