const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  professionalTitle: {
    type: String,
    required: true,
  },
  companyOrganization: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  professionalBio: {
    type: String,
    required: true,
  },
  linkedInProfile: {
    type: String,
    required: true,
  },
  following: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Startup",
    },
  ],
  // expectedROI:{
  //   type:Number,
  // },
  // involvementLevel:{
  //   type:String,
  //   required:true
  // },
  accreditedInvestorStatus: {
    type: String,
    required: true,
  },
  //doc Of Accreditation,proof of funds
  createdAt: {
    type: Date,
    required: true,
  },
  /*updatedAt:{
      type:Date,
      required:true
    },*/
});

module.exports = mongoose.model("Investor", Schema);
