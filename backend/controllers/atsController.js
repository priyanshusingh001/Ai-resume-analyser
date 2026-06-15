const Resume = require("../models/resume");

const {
  analyzeATS
} = require("../services/geminiService");


// Basic ATS
const calculateATS = async (req, res) => {
  try {

    const { resumeId, jobDescription } = req.body;

    const resume =
      await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found"
      });
    }

    const jdText =
      jobDescription.toLowerCase();

    const matchedSkills = [];
    const missingSkills = [];

    resume.skills.forEach((skill) => {

      if (
        jdText.includes(skill.toLowerCase())
      ) {
        matchedSkills.push(skill);
      } else {
        missingSkills.push(skill);
      }

    });

    const atsScore = Math.round(
      (matchedSkills.length /
        resume.skills.length) * 100
    );

    res.json({
      success: true,
      atsScore,
      matchedSkills,
      missingSkills
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// AI ATS
const calculateAIATS = async (
  req,
  res
) => {

  try {

    const {
      resumeId,
      jobDescription
    } = req.body;

    const resume =
      await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found"
      });
    }

    const analysis =
      await analyzeATS(
        resume,
        jobDescription
      );

    res.status(200).json({
      success: true,
      data: analysis
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

module.exports = {
  calculateATS,
  calculateAIATS
};