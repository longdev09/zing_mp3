import express from "express";
import PlayListController from "../controllers/PlayListController.js";
import authenticateToken from "../Middleware/authenticateToken.js";
import upload from "../Middleware/multer.js";
const router = express.Router();

router.post(
  "/user/create/playlist",
  authenticateToken,
  upload.single("image"),
  PlayListController.createPlayList.bind(PlayListController)
);

//  login mới lấy được
router.get(
  "/user/get/playlist",
  authenticateToken,
  PlayListController.getPlayListUser.bind(PlayListController)
);

//thêm bài vào play list, cần đăng nhập 
router.put(
  "/user/put/song/playlist/:encodeId",
  authenticateToken,
  PlayListController.addSongPlayList.bind(PlayListController)
);
export default router;
