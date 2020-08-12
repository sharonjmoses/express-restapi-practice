const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  }
);

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    /**
     * Choose any one of the below definition for model variable
     */
    // for individual model files having `export default (sequelize, DataTypes) => {`
    const model = require(path.join(__dirname, file)).default(
      sequelize,
      Sequelize.DataTypes
    );
    // for individual model files having `module.exports = (sequelize, DataTypes) => {`
    // const model = require(path.join(__dirname, file))(
    //   sequelize,
    //   Sequelize.DataTypes
    // );
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// export { sequelize };

// export default models;

// let users = {
//   1: {
//     id: '1',
//     username: 'MKS',
//   },
//   2: {
//     id: '2',
//     username: 'Dev',
//   },
// };

// let messages = {
//   1: {
//     id: '1',
//     text: 'Sample 1',
//     userId: '1',
//   },
//   2: {
//     id: '2',
//     text: 'Sample 2',
//     userId: '2',
//   },
// };

// export default {
//   users,
//   messages,
// };
