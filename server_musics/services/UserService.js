import User from "../models/User.js";

class UserSerive {
  // các hàm
  async getUserByUid(uid) {
    try {
      const user = await User.findById(uid);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async createUser({ email, password }) {
    try {
      const name = "user" + Math.floor(Math.random() * 1000);
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });
      await newUser.save();
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }
  async getUserByEmailPassword({ email, password }) {
    try {
      const user = await User.findOne({ email, password });
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserByField(field) {
    try {
      const user = await User.findOne({ field });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserSerive();
