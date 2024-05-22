const db = require('../db/dataBase');
const { DataTypes, Model } = require('sequelize');

class Product extends Model {}

Product.init({
    product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull:false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: db,
    modelName: 'Product'
});

module.exports = Product;