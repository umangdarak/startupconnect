const mongoose=require("mongoose");

const Schema=mongoose.Schema({
    projectId:{
        type:String,
        required:true
    },
    startupId:{
      type:String,
      required:true
    },
    projectTitle:{
      type:String,
      required:true
    },
    projectDescription:{
      type:String,
      required:true
    },
    /*stageOfDevelopment:{
      type:String,
      required:true
    },*/
    targetMarket:{
      type:String,
      required:true
    },
    businessModel:{
      type:String,
      required:true
    },
    fundingGoals:{
      type:Number,
      required:true
    },
    useOfFunds:[{
      type:String,
      required:true
    }],
    expectedROI:{
      type:Number,
      required:true
    },
    patentDetails:{
      type:String,
      required:true
    },
    legalDocuments:{
      type:mongoose.SchemaTypes.Buffer,
      required:true
    },
    
    //pitchDeck,Businessplan,exec_summary
    createdAt:{
      type:Date,
      required:true
    },

    
});

module.exports=mongoose.model('Project',Schema);