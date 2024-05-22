const { Sequelize } = require("sequelize"); 
const db = new Sequelize('products_test', 'root', '5545im',
{
    host: 'localhost',
    dialect: 'mysql'
});

const testConnectionDataBase = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
            console.error('Unable to connect to the database:', error);
    }
}

testConnectionDataBase();
module.exports = db;