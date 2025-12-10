import express from "express";
import {createCollection, deleteCollection, getCollection, getCollectionNfts, getCollections, update} from "../controllers/collection.js"

const router = express.Router();

// create
router.post("/",createCollection)

// update
router.put("/",update)

// delete
router.delete("/",deleteCollection)

// get all
router.get("/",getCollections)

// get top
router.get("/top/",getCollection)

// get collection nft
router.get("/category/:id",getCollectionNfts)


export default router;