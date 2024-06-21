const { Sequelize } = require('sequelize');
const {db} = require('../../config/index');

const { host, port, user, password, database } = db;

const sequelize = new Sequelize(database, user, password, {
  host: host, // 数据库地址
  dialect: 'mysql', // 指定数据库类型
  logging: false, // 如果你希望看到 SQL 查询，可以将其设置为 console.log
  timezone: '+08:00', // 东八时区
  define: {
    timestamps: true, // 默认情况下，sequelize 会自动为每个模型添加 createdAt 和 updatedAt 字段
    underscored: true, // 将所有自动生成的列名设置为下划线命名法
  },
  
});

module.exports = sequelize;