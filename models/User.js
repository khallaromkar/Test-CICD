import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
    },
    img:{
        type:String,
    }, 
    liked:{
        type:[String],
        default:[],
    },
    fromGoogle:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

export default mongoose.model("NftUser",UserSchema);