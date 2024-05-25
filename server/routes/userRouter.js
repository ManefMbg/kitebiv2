import express from "express";
import { User } from "../models/User.js";
import {
  deleteUser,
  getOneUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import isAuth from "../middleware/isAuth.js";
import isAdmin from "../middleware/isAdmin.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getOneUser);
router.put("/update/:id", isAuth, isAdmin, updateUser);
router.delete("/delete/:id", deleteUser);

export { router as UserRouter };
