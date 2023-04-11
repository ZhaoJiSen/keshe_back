const connect = require("./mysql_connect");
require("./models");

try {
  connect.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

connect
  .sync({
    focus: true,
  })
  .then((res) => {
    console.log("用户模型表刚刚(重新)创建！");
    process.exit();
  });
