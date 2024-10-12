import express from "express";
import {
  artist,
  artistSong,
  chartHome,
  getPlaylist,
  getSong,
  getSongPremium,
  home,
  lyric,
  newRelease,
  newReleaseChart,
  recommendSong,
  search,
  songInfo,
  top100,
} from "../controllers/musicController.js"; // Đảm bảo đường dẫn chính xác

  const router = express.Router();

  // Lấy nhạc bài hát
  router.get("/song/:id", getSong);
  router.get("/playlist/:id", getPlaylist);
  router.get("/songPremium/:id", getSongPremium);
  router.get("/recommend/song/:id", recommendSong);
  router.get("/home", home);
  router.get("/top100", top100);
  router.get("/chartHome", chartHome);
  router.get("/newReleaseChart", newReleaseChart);
  router.get("/newRelease", newRelease);
  router.get("/songInfo/:id", songInfo);
  router.get("/artist/:id/songs", artistSong);
  router.get("/artist/:name", artist);
  router.get("/lyric/:id", lyric);
  router.get("/search", search);

export default router;
