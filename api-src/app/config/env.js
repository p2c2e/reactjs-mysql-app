const env = {
  database: 'reactjs',
  username: 'root',
  password: 'mysql',
  host: 'host.docker.internal',
  dialect: 'mysql',
  port: 30006,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;
