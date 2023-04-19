const database = require('../models')

class FollowersController {

    //Buscar todos os usuarios
    static async getAllFollowersByUser(req, res){
        try{
            const { id } = req.params
            const allUsers = await database.Followers.findAll({
                where: {followedId:Number(id)}
            })
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = FollowersController