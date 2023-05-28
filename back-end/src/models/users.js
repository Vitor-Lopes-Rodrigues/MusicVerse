'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Followers, {
        foreignKey: 'follower_id'
      })
      this.hasMany(models.Followers, {
        foreignKey: 'followed_Id'
      })
      this.hasMany(models.Posts, {
        foreignKey: 'user_id'
      })
    }
  }
  Users.init({
    name: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    cep: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};