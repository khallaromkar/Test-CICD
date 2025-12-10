import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.act;
  if (!token) return res.status(401).json("not authenticated");

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(403).json("Token is not valid");
    req.user = user;
    next();
  });
}
