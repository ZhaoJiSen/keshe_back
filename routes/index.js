const fs = require("fs");

const registerRouters = (app) => {
  // 读取当前文件夹下面的所有文件
  const files = fs.readdirSync(__dirname);

  for (const file of files) {
    // 通过判断文件名中是否含有 "router" 来判断是否是路由文件
    if (file.includes("router")) {
      const router = require(`./${file}`);

      // console.log(router);

      app.use(router.routes());
      app.use(router.allowedMethods());
    }
  }
};

module.exports = registerRouters;
