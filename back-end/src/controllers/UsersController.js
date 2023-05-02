const database = require('../models')
const jsonwebtoken = require("jsonwebtoken")

class UsersController {

    //Login
    static async login(req, res){
        try{
            //Buscando usuário
            const user = await database.Users.findOne({
                where: { email:String(req.body.email), password:String(req.body.password) }
            })

            //Validando usuário
            if(!user) return res.status(401).json("Usuário ou senha incorretos!")

            //Gerando token
            const token = jsonwebtoken.sign(
                { user: JSON.stringify(user) },
                'PRIVATE_KEY',
                { expiresIn: '60m' }
            )
            return res.status(200).json({ data: { user, token } })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Buscar todos os usuarios
    static async getAllUsers(req, res){
        try{
            const allUsers = await database.Users.findAll()
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Buscar apenas um usuario pelo id
    static async getUser(req, res){
        try{
            const { id } = req.params
            const user = await database.Users.findOne({
                where: {id:Number(id)}
            })
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Cadastrar usuario
    static async saveUser(req, res){
        try{
            const user = await database.Users.create(req.body)
            return res.status(201).json(user)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Atualizar dados de um usuario
    static async updateUser(req, res){
        try{
            const { id } = req.params
            await database.Users.update(req.body, {where: {id:Number(id)}})
            const updatedUser = await database.Users.findOne({
                    where: {id:Number(id)
                }})
            return res.status(201).json(updatedUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //Deleta usuario
    static async deleteUser(req, res){
        try{
            const { id } = req.params
            await database.Users.destroy({where: {id:Number(id)}})
            return res.status(201).send("Usuário deletado com sucesso!")
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsersController