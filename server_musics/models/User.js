import mongoose from "mongoose";

// tao model user
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Tự động lưu thời gian tạo
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Tự động lưu thời gian cập nhật
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
