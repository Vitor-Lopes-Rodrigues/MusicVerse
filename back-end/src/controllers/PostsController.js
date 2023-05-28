const database = require('../models')

class PostsController {

    // Buscar todos os posts
    static async getAllPosts(req, res){
        try{
            const allPosts = await database.Posts.findAll({
                order: [['createdAt', 'DESC']]
            });
            return res.status(200).json(allPosts)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // Criar um post
    static async saveUser(req, res){
        try{
            const post = await database.Posts.create(req.body)
            return res.status(201).json(post)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PostsController