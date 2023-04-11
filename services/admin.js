const { adminTable } = require("../db/models");

class adminService {
    async addAdminData(data) {
        return await adminTable.create(data);
    }
}

module.exports = new adminService();