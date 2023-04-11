const { DataTypes } = require("sequelize");
const connect = require("../mysql_connect");

/**
 * ! 管理员表: Admin
 */
const adminTable = connect.define("Admin", {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: "admin",
    comment: "用户名",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "123456",
    comment: "密码",
  },
  confirm: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "123456",
    comment: "确认密码",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "1301338853@qq.com",
    comment: "电子邮件",
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "13942305532",
    comment: "电话号",
  },
  prefix: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "+86",
    comment: "电话号前缀",
  },
});

module.exports = adminTable;
