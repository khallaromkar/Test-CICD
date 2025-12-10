import Collection from "../models/Collection.js";
import Nft from "../models/Nft.js";

export const createCollection = async (req, res) => {
  try {
    const newCollection = new Collection(req.body);
    const savedCollection = await newCollection.save();
    res.status(200).json(savedCollection);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const updateCollection = await Collection.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCollection);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCollection = async (req, res) => {
    try {
        await Collection.findByIdAndDelete(
          req.params.id,
        );
        res.status(200).json("collection deleted");
      } catch (error) {
        res.status(450).json(error);
      }
};

export const getCollectionNfts = async(req,res)=>{
  try {
    const query = req.params.id;
    const collection = await Collection.findById({_id:query});
    const nft = await Nft.find({category:collection.title});
    res.status(200).json({nft,collection});
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getCollections = async (req, res) => {
    try {
        const Collections = await Collection.find();
        res.status(200).json(Collections);
      } catch (error) {
        res.status(500).json(error);
      }
};

export const getCollection = async (req, res) => {
    try {
        const Collections = await Collection.find().limit(9);
        res.status(200).json(Collections);
      } catch (error) {
        res.status(400).json(error);
      }
};


