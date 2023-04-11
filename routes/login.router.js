const KoaRouter = require("@koa/router");
const LoginController = require("../controllers/Login");

const loginRouter = new KoaRouter({ prefix: "/login" });

loginRouter.post("/login_merchant", LoginController.merchantLogin);
loginRouter.post("/login_admin", LoginController.adminLogin);

module.exports = loginRouter;
