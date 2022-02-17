import db from "../models";

let { User } = db;
export default class UserService {
  async loginUser(password: string) {
    let result = await User.findOne({ query: { password: password } });
    if (result !== 1) return false;
    return true;
  }
  async updatePassword(password: string) {
    return true;
  }
}
