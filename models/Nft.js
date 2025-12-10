import moongoose from "mongoose";

const NftSchema = new moongoose.Schema({
    title:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    link:{
        type:String,
    },
    likes:{
        type:Number,
        default:0
    },
    crypto:{
        type:String,
    },
    category:{
        type:String,
    },
},{timestamps:true});

export default moongoose.model("Nft",NftSchema);