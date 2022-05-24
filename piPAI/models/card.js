import { DataTypes } from 'sequelize';


const sequelize = require("./database");

const Card = sequelize.define('Card', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    tender: {type: DataTypes.STRING, allowNull: false},
    customer: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    start: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    finish: {type: DataTypes.DATE, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
});

module.exports = Card;