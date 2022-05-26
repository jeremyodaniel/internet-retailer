const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      // allowNull: true, (Omitted to match project guidelines)
      references: {
        model: "product",
        key: "id"
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      // allowNull: false, (Omitted to match project guidelines)
      references: {
        model: "tag",
        key: "id"
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
