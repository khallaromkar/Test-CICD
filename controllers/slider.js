import Slider from "../models/Slider.js";

export const createSlider = async (req, res) => {
  try {
    const newSlider = new Slider(req.body);
    const savedSlider = await newSlider.save();
    res.status(200).json(savedSlider);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const updateSlider = await Slider.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateSlider);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteSlider = async (req, res) => {
    try {
        await Slider.findByIdAndDelete(
          req.params.id,
        );
        res.status(200).json("Slider deleted");
      } catch (error) {
        res.status(400).json(error);
      }
};

export const getSlider = async (req, res) => {
    try {
        const Sliders = await Slider.find();
        res.status(200).json(Sliders);
      } catch (error) {
        console.log(error);
        res.status(400).json(error);
      }
};

