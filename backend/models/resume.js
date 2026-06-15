const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true
},
    name: String,
    email: String,
    phone: String,

    skills: [String],

    education: [Object],

    experience: [Object],

    projects: [Object],

    certifications: [String]
    
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Resume",
  resumeSchema
);