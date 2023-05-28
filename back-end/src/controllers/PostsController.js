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

    //Buscar apenas um post pelo id
    static async getPost(req, res){
        try{
            const { id } = req.params
            const post = await database.Posts.findOne({
                where: {id:Number(id)}
            })
            return res.status(200).json(post)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // Criar um post
    static async savePost(req, res){
        try{
            const post = await database.Posts.create(req.body)
            return res.status(201).json(post)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Atualizar post
    static async updatePost(req, res){
        try{
            const { id } = req.params
            await database.Posts.update(req.body, {where: {id:Number(id)}})
            const updatedPost = await database.Posts.findOne({
                where: {id:Number(id)
                }})
            return res.status(201).json(updatedPost)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Deleta post
    static async deletePost(req, res){
        try{
            const { id } = req.params
            await database.Posts.destroy({where: {id:Number(id)}})
            return res.status(201).send("Post deletado com sucesso!")
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PostsController