import moongoose from "mongoose";

const SliderSchema = new moongoose.Schema(
  {
    bannerImg: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default moongoose.model("Slider", SliderSchema);
