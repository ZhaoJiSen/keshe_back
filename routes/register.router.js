const KoaRouter = require("@koa/router");
const RegisterController = require("../controllers/Register");

const registerRouter = new KoaRouter({ prefix: "/merchant" });

registerRouter.post("/merchant_register", RegisterController.setRegisterInfo);

module.exports = registerRouter;
