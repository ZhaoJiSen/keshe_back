const merchantService = require("../services/merchant");

class Login {
  async adminLogin(ctx, next) {
    ctx.body = "登陆成功";
  }

  async merchantLogin(ctx, next) {
    const { username, password } = ctx.request.body;

    if (!username || !password) {
      return ctx.app.emit("error", USERNAME_OR_PASSWORD_IS_REQUIRED, ctx);
    }

    const merchantNameResult = await merchantService.findMerchant(
      username,
      password
    );

    const { code, message, data } = merchantNameResult;

    switch (code) {
      case 0:
        ctx.body = {
          message,
        };
        break;
      case 1:
        ctx.body = {
          message,
        };
      default:
        break;
    }

    // console.log(merchants);
  }
}

module.exports = new Login();
