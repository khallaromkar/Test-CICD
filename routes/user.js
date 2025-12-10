import express from "express";
import { update,deleteUser,getUser, unLikeNft, likeNft } from "../controllers/user.js";
import {verifyToken} from "../verifyToken.js"

const router = express.Router();

// update user
router.put("/:id",verifyToken,update)

// update user
router.delete("/:id",verifyToken,deleteUser)

// update user
router.get("/find/:id",verifyToken,getUser)

// update user
router.put("/like/:id",verifyToken,likeNft)

// update user
router.put("/unlike/:id",verifyToken,unLikeNft)


export default router;