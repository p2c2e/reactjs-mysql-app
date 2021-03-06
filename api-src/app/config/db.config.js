const env = require('./env.js');

if(process.env.MYSQL_HOST) {
  env.host = process.env.MYSQL_HOST
}
if(process.env.MYSQL_PORT) {
  env.port = process.env.MYSQL_PORT
}

const Sequelize = require('sequelize');
// const sequelize = new Sequelize(env.database, env.username, env.password, {
//   host: env.host,
//   port: env.port,
//   dialect: env.dialect,
//   operatorsAliases: false,
//
//   pool: {
//     max: env.max,
//     min: env.pool.min,
//     acquire: env.pool.acquire,
//     idle: env.pool.idle
//   }
// });

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mydatabase.sqlite'
})
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Customer = require('../models/customer.model.js')(sequelize, Sequelize);
db.Employee = require('../models/emp.model.js')(sequelize, Sequelize);

db.TagGroup = require('../models/taggroup.model.js')(sequelize, Sequelize);
db.Tag = require('../models/tag.model.js')(sequelize, Sequelize);
db.TagTie = require('../models/tagtie.model.js')(sequelize, Sequelize);

module.exports = db;