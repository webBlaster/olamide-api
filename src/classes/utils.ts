const bcrypt = require("bcryptjs");

export default class Utils {
  static async encryptPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }
}
