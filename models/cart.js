'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'userId'
      });
      this.belongsToMany(models.product, {
        through: models.cart_products,
        foreignKey: 'cartId',
        otherKey: 'productId'
      })
    }
  }
  cart.init({
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'creation'
    }
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};