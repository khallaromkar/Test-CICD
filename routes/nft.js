import express from "express";
import { createNft, deleteNft, getNft, update,catNft,searchNft,topNft, getHomeNft } from "../controllers/nft.js";

const router = express.Router();

// create
router.post("/",createNft)
// update
router.put("/:id",update)
// delete
router.delete("/:id",deleteNft)
// get all
router.get("/",getNft)
// get all
router.get("/all/",getHomeNft)
// top nft
router.get("/top",topNft)
// search Nft
router.get("/search",searchNft);
// collection nft
router.get("/cat/",catNft)


export default router;
