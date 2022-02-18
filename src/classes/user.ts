import db from "../models";
import Utils from "../classes/utils";
let bcrypt = require("bcryptjs");

let { User } = db;
export default class UserService {
  static async createUser() {
    const [user, created] = await User.findOrCreate({
      where: { id: 1 },
      defaults: {
        password: Utils.encryptPassword("admin"),
      },
    });
    if (created) return true;
    return false;
  }

  static async loginUser(password: string) {
    let result = (await User.findOne({ where: { id: 1 } })) || "null";
    if (await bcrypt.compare(password, result.password)) return true;
    return false;
  }

  static async updatePassword(id: number, password: string) {
    let currentPassword = await User.findOne({ where: { id: id } });
    if (currentPassword && (await bcrypt.compare(password, currentPassword))) {
      //update password
      let update = await User.update(
        { password: Utils.encryptPassword(password) },
        {
          where: { id: 1 },
        }
      );
      if (update) return true;
    }
    return false;
  }
}
