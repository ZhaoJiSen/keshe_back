class Login {
  async adminLogin(ctx, next) {
    ctx.body = "登陆成功";
  }

  async merchantLogin(ctx, next) {
    // console.log(ctx);
  }
}

module.exports = new Login();
