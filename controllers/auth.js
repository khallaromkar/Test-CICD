import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async(req,res)=>{
    try {
        const hash = await bcrypt.hash(req.body.password,10);
        const newuser = new User({...req.body,password:hash});
        const savedUser = await newuser.save();
        const {password,isAdmin,...others} = savedUser._doc;
        res.status(200).json(others);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const signin = async(req,res)=>{
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user) return res.status(400).json("No user");

        const verifypass = await bcrypt.compare(req.body.password,user.password)
        if(!verifypass) return res.status(401).json("Invalid details");

        const token = await jwt.sign({id:user._id},process.env.JWT);
        // if(user.isAdmin === true){
            // const {password,...others} = user._doc;
        // }else{
            const {password,...others} = user._doc;
        // }
        res.status(200).cookie("act",token,{
            httpOnly:true
        }).json(others);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

export const google = async(req,res)=>{
    try {
        const findUser = await User.findOne({email:req.body.email});
        if(findUser){
            const token = jwt.sign({id:findUser._id},process.env.JWT);
            let data;
            if(findUser.isAdmin === true){
                
                data = findUser._doc;;
            }else{
                const {isAdmin,...others} = findUser._doc;
                data = others;
            }
            res.status(200).cookie("act",token,{
                httpOnly:true
            }).json(data);

        }else{
            const newUser = new User({fromGoogle:true,...req.body});
            const SavedUser = await newUser.save();
            let data;
            if(SavedUser.isAdmin === true){
                const {isAdmin  ,...others} =  SavedUser._doc;
                data = others;
            }else{
                const {isAdmin,...others} = SavedUser._doc;
                data = others;
            }
            const token = jwt.sign({id:SavedUser._id},process.env.JWT);
            res.status(200).cookie("act",token,{
                httpOnly:true
            }).json(data);
        }
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}