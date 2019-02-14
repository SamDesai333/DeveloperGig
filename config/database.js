const Sequelize = require('sequelize');
module.exports = new Sequelize('dbhahubdlnqapf', 'vkobjtnizdhnqc', '3b79819083c17155094217b78fd0822aa99cb21c61e17cb2979cc0d48522a31e', {
  
  host: 'ec2-54-227-246-152.compute-1.amazonaws.com',
  dialect:'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});