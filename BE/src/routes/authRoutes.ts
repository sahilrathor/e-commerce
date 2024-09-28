import express from "express";
import login from "../controllers/auth/login";
import signup from "../controllers/auth/signup";
import logout from "../controllers/auth/logout";
import deleteUser from "../controllers/auth/deleteUser";
import update from "../controllers/auth/update";
import protectRoute from "../middlewares/protectRoute";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.delete("/:id", protectRoute, deleteUser);
router.patch("/:id", protectRoute, update);

export default router;