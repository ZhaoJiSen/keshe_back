const { DataTypes } = require("sequelize");
const connect = require("../mysql_connect");

/**
 * ! 商户表: Merchant
 */
const merchantTable = connect.define("Merchant", {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "密码",
  },
  confirm: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "确认密码",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "电子邮件",
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "电话号",
  },
  prefix: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "电话号前缀",
  },
});

module.exports = merchantTable;
