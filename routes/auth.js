import express from "express";
import {signup,signin,google} from "../controllers/auth.js"

const router = express.Router();

// Sign up
router.post("/signup",signup);
// Sign in
router.post("/signin",signin)
// Sign up with google
router.post("/google",google);


export default router;