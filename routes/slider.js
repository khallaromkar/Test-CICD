import express from "express";
import {createSlider, deleteSlider, getSlider, update} from "../controllers/slider.js"

const router = express.Router();

// create
router.post("/",createSlider)

// update
router.put("/",update)

// delete
router.delete("/",deleteSlider)

// get all
router.get("/",getSlider)



export default router;