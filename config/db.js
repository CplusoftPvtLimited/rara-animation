const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('ahmed', 'root', 'Total123', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

const sequelize = new Sequelize('mydatabase', 'root', 'Total123', {
  host: 'localhost',
  dialect: 'mysql',
});


sequelize
  .authenticate()
  .then(() => {
    console.log(
      'Connection to the database has been established successfully.'
    );
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
