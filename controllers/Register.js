const merchantService = require("../services/merchant");

class Register {
  async setRegisterInfo(ctx, next) {
    // console.log("ctx.request.body:", ctx.request.body);

    const requestData = ctx.request.body;

    const result = await merchantService.addMerchantData(requestData);

    if (result) {
      ctx.body = "写入数据库成功";
    } else {
      ctx.body = "写去数据库失败";
    }
  }
}

module.exports = new Register();
