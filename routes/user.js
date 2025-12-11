import express from "express";
import { update,deleteUser,getUser, unLikeNft, likeNft } from "../controllers/user.js";
import {verifyToken} from "../verifyToken.js"

const router = express.Router();

// update user
router.put("/:id",verifyToken,update)

// delete user
router.delete("/:id",verifyToken,deleteUser)

// get user
router.get("/find/:id",verifyToken,getUser)

// like user
router.put("/like/:id",verifyToken,likeNft)

// dislike user
router.put("/unlike/:id",verifyToken,unLikeNft)


export default router;