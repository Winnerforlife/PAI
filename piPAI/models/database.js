/**
 * Import Sequelize.
 */
import { Sequelize } from 'sequelize';

/**
 * Create a Sequelize instance. This can be done by passing
 * the connection parameters separately to the Sequelize constructor.
 */
const sequelize = new Sequelize('piPAI', 'root', null, {
    dialect: 'mysql'
})

/**
 * Export the Sequelize instance. This instance can now be
 * used in the app.js file to authenticate and establish a database connection.
 */
module.exports = sequelize;