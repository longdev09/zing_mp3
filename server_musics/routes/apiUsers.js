import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router.post("/user/sign-up", UserController.createUser.bind(UserController));
//  Đăng nhập tài khoản
router.post("/user/login", UserController.loginUser.bind(UserController));

// kiểm tra phiên đăng nhập
router.get("/user/verify", UserController.verifyToken.bind(UserController));

// get User by uid

router.get("/user/get-user/:uid", UserController.getUser.bind(UserController));

export default router;
