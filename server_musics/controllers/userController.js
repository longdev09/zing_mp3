import User from "../models/User.js";

export const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Kiểm tra email đã tồn tại chưa
    const exitUser = await User.findOne({ email });
    if (exitUser) {
      console.log(exitUser);
      return res.status(400).json({ message: "Email đã tồn tại!" });
    }
    //Tạo random tên user

    const name = "user" + Math.floor(Math.random() * 1000);
    const newUser = new User({ name, email, password });
    await newUser.save();
    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error creating user", error: error.message });
  }
};
