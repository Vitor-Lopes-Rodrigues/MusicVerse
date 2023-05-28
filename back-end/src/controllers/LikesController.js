const database = require('../models')

class FollowersController {

    //Buscar quantidade de likes
    static async getAllLikesByPost(req, res) {
        try {
            const { postId } = req.params;
            const allLikes = await database.Likes.findAll({
                where: { post_id: Number(postId) }
            });
            const likesCount = allLikes.length;
            const usersLiked = allLikes.map(like => like.user_id);
            return res.status(200).json({ likesCount, usersLiked });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Criar um post
    static async saveLike(req, res){
        try{
            const like = await database.Likes.create(req.body)
            return res.status(201).json(like)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Deleta like
    static async deleteLike(req, res){
        try{
            const { postId } = req.params
            const { userId } = req.params
            await database.Likes.destroy({
                where:
                    {
                        post_id:Number(postId),
                        user_id:Number(userId)
                    }
            })
            return res.status(201).send("Like deletado com sucesso!")
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = FollowersController