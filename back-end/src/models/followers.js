'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Followers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: 'follower_id'
      })
      this.belongsTo(models.Users, {
        foreignKey: 'followed_id'
      })
    }
  }
  Followers.init({
    follower_id: DataTypes.INTEGER,
    followed_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Followers',
  });
  return Followers;
};