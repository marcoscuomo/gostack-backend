require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  // host: 'localhost',
  host: process.env.DB_HOST,
  // username: 'postgres',
  username: process.env.DB_USER,
  // password: 'docker',
  password: process.env.DB_PASS,
  // database: 'gobarber',
  database: process.env.DB_NAME,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
