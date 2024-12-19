import mongoose from "mongoose";

// Tạo model PlayList

const PlayListSchema = new mongoose.Schema({
  encodeId: { type: String }, // Trường gắn giá trị _id
  title: {
    type: String,
    required: true,
    trim: true,
  },
  public: {
    type: Boolean,
  },

  urlImg: {
    type: String,
    required: true,
    trim: true,
  },
  song: {
    items: [], // Mảng chứa các bài hát
  },
  createdBy: {
    type: String,
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

// Middleware để gắn encodeId = _id
PlayListSchema.pre("save", function (next) {
  if (!this.encodeId) {
    this.encodeId = this._id.toString(); // Gán encodeId bằng giá trị _id
  }
  next();
});

const PlayList = mongoose.model("PlayList", PlayListSchema);

export default PlayList;
