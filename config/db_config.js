/**
 * ! 数据库配置文件
 */
module.exports = {
  MYSQL_CONF: {
    base: {
      host: "localhost",
      dialect: "mysql",
      pool: {
        max: 5, // 最大连接数
        min: 0,
        idle: 10000, // 10000s 之后没有连接，连接自动取消
      },
    },
    conf: ["jz_back", "root", "123456"],
  },
};
