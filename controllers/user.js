import User from "../models/User.js";
import Nft from "../models/Nft.js";

export const update = async (req, res) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password,isAdmin, ...others } = updateUser._doc;
      res.status(200).json(others);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(400).json("You can update only your account");
  }
};

export const deleteUser = async (req, res) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("userDeleted");
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(400).json("You can delete only your account");
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password,isAdmin, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const likeNft = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id,{
        $addToSet:{liked:req.params.id}
    });
    const nft = await Nft.findByIdAndUpdate(req.params.id,{
        $inc:{likes:1}
    })
    res.status(200).json("Liked nft")
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const unLikeNft = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.user.id,{
        $addToSet:{liked:req.params.id}
      });
      const nft = await Nft.findByIdAndUpdate(req.params.id,{
        $inc:{likes:-1}
      })
      res.status(200).json("Nft nliked");
    } catch (error) {
      res.status(400).json(error);
    }
  
};
