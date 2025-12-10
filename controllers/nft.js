import User from "../models/User.js";
import Nft from "../models/Nft.js";

export const createNft = async (req, res) => {
  try {
    const newNft = new Nft(req.body);
    const savedNft = await newNft.save();
    res.status(200).json(savedNft);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const updateNft = await Nft.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateNft);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteNft = async (req, res) => {
    try {
        await Nft.findByIdAndDelete(
          req.params.id,
        );
        res.status(200).json("Nft deleted");
      } catch (error) {
        res.status(400).json(error);
      }
};

export const getNft = async (req, res) => {
    try {
        const Nfts = await Nft.find();
        res.status(200).json(Nfts);
      } catch (error) {
        res.status(400).json(error);
      }
};

export const getHomeNft = async (req, res) => {
    try {
        const Nfts = await Nft.find().limit(16);
        res.status(200).json(Nfts);
      } catch (error) {
        res.status(400).json(error);
      }
};

export const catNft = async (req, res) => {
    try {
        const query = req.query.cat;
        const Nfts = await Nft.find({category:query});
        res.status(200).json(Nfts);
      } catch (error) {
        res.status(400).json(error);
      }
};

export const searchNft = async (req, res) => {
    try {
        const search = req.query.search;
        const Nfts = await Nft.find({title:{$regex:search,$options:"i"}});
        res.status(200).json(Nfts);
      } catch (error) {
        res.status(400).json(error);
      }
};

export const topNft = async (req, res) => {
    try {
        const Nfts = await Nft.find().sort({likes:-1}).limit(12);
        res.status(200).json(Nfts);
      } catch (error) {
        res.status(400).json(error);
      }
};
