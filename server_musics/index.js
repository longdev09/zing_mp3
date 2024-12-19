import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import apiUsers from "./routes/apiUsers.js";
import apiZingmp3 from "./routes/apiZingmp3.js";
import playList from "./routes/playList.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;
dotenv.config();
// Cấu hình CORS
const corsOptions = {
  origin: (origin, callback) => {
    // Cho phép tất cả các origin
    callback(null, true);
  },
  credentials: true, // Cho phép gửi cookie
};

app.use(cors(corsOptions));

app.use(cookieParser());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Để hỗ trợ JSON body parsing

connectDB();
// Gọi api zing mp3
app.use("/api", apiZingmp3);

// Gọi api user
app.use("/api", apiUsers);
app.use("/api", playList);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
