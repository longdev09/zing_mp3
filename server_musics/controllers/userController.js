import jwt from "jsonwebtoken";
import UserService from "../services/UserService.js";

class UserController {
  // lấy thông tin người dùng
  async getUser(req, res) {
    const { uid } = req.params;
    const user = await UserService.getUserByUid(uid);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Không tìm thấy người dùng này!" });
    }
    res.status(200).json({ message: "Lấy thông tin thành công", user: user });
    try {
    } catch (error) {
      return res.status(500).json({ message: "Lỗi máy chủ" });
    }
  }
  // tạo người dùng
  async createUser(req, res) {
    const { email, password } = req.body;

    try {
      const user = await UserService.getUserByField(email);
      if (user) {
        return res.status(401).json({ message: "Email đã tồn tại!" });
      }
      const newUser = await UserService.createUser({ email, password });
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      return res.status(500).json({ message: "Lỗi máy chủ" });
    }
  }

  // đăng nhập người dùng
  async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await UserService.getUserByEmailPassword({
        email,
        password,
      });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid credentials", logged: false });
      }
      const token = jwt.sign(
        { id: user._id.toString(), email: user.email },
        process.env.JWTtoken,
        {
          expiresIn: "7d", // 7 ngày
        }
      );
      // Gửi cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày
      }); // 1 hour
      // Trả về phản hồi với thông tin người dùng
      res.json({
        message: "Login successful",
        user: { id: user._id, email: user.email },
        logged: true,
      });
    } catch (error) {
      return res.status(500).json({ message: "Lỗi máy chủ" });
    }
  }

  async verifyToken(req, res) {
    const token = req.cookies.token;
    if (!token)
      return res.status(200).json({ message: "Thành công", logged: false });
    try {
      const decoded = jwt.verify(token, process.env.JWTtoken);
      res.json({
        message: "Bạn đã từng đăng nhập",
        user: decoded,
        logged: true,
      });
    } catch (error) {
      return res.status(200).json({ message: "Thành công", logged: false });
    }
  }
}

export default new UserController();
