'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.role, {
        through: 'user_role',
        foreignKey: 'userId',
        otherKey: 'roleId'
      });

     this.hasMany(models.cart, {
        foreignKey: 'userId'
      })
    }
  }
  user.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 4
      }
    },
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });

  user.beforeCreate(async (user) => {
    const encryptedPassword = bcrypt.hashSync(user.password, parseInt(process.env.SALT_ROUNDS));
    user.password = encryptedPassword; // this line will make change in the user object
  })

  return user;
};