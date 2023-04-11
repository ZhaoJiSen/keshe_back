// ! 导入表模型
const { merchantTable } = require("../db/models");

class merchantService {
  async addMerchantData(data) {
    return await merchantTable.create(data);
  }

  async findMerchant(username, password) {
    /**
     * ! 等价于
     * # SELECT * FROM merchantTable WHERE nickname = username And password = password;
     */
    const merchants = await merchantTable.findAll({
      where: {
        nickname: username,
        password
      },
    });

    const merchant = merchants[0];

    console.log(merchant)

    if (!merchant) {
      return {
        code: 0,
        message: "用户名错误",
        data: null,
      };
    }

    return {
      code: 1,
      message: "该用户名存在",
      data: null,
    };
  }

}

module.exports = new merchantService();
