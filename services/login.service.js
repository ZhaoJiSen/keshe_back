const { connect } = require("../db/mysql_connect");

class LoginService {
  async findMerchantByName(username) {
    const statement = `SELECT * FROM merchants WHERE USERNAME = ? `;
    const [result] = await connect.execute(statement, [username]);

    return result;
  }
}


module.exports = new LoginService();