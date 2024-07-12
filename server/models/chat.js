const mongoose=require("mongoose");
const Schema=mongoose.Schema({
    sender:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    receiver:{
        type:mongoose.SchemaType.ObjectId,
        required:true
    },
    messages:[
        {type:String}
    ],
},{timestamps:true});

module.exports=mongoose.model("Chat",Schema);