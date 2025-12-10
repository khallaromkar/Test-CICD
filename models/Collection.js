import moongoose from "mongoose";

const CollectionSchema = new moongoose.Schema({
    title:{
        type:String,
        require:true
    },
    bannerImg:{
        type:String,
        require:true
    },
    logoImg:{
        type:String,
        require:true
    },
},{timestamps:true});

export default moongoose.model("Collection",CollectionSchema);