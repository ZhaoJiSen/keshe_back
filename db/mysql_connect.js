/**
 * ! 数据库连接文件
 */
const Sequelize = require("sequelize"),
  { MYSQL_CONF } = require("../config/db_config");

/**
 * # 直接使用数据库配置文件
 */
const seq = new Sequelize(...MYSQL_CONF.conf, MYSQL_CONF.base);

module.exports = seq;
