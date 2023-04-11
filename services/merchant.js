// ! 导入表模型
const { merchantTable } = require("../db/models");

class merchantService {
  async addMerchantData(data) {
    return await merchantTable.create(data);
  }
}

module.exports = new merchantService();
