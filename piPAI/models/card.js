import { Sequelize, Model, DataTypes } from 'sequelize';


const sequelize = new Sequelize('sqlite::memory:');

const Card = sequelize.define('Card', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    tender: {type: DataTypes.STRING, allowNull: false},
    customer: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    start: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    finish: {type: DataTypes.DATE, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
});