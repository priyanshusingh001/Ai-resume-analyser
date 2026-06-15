
const fs = require("fs");
const pdf = require("pdf-parse");

const Resume = require("../models/resume");

const {
  analyzeResume
} = require("../services/geminiService");


// Upload Resume + Parse + Save
const uploadResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required"
      });
    }

    // Read PDF
    const dataBuffer = fs.readFileSync(
      req.file.path
    );

    // Extract Text
    const pdfData = await pdf(
      dataBuffer
    );

    // Analyze using Gemini
    const parsedResume =
      await analyzeResume(
        pdfData.text
      );

    // Fix Certifications
    if (
      parsedResume.certifications &&
      Array.isArray(
        parsedResume.certifications
      )
    ) {

      parsedResume.certifications =
        parsedResume.certifications.map(
          (cert) => {

            if (
              typeof cert ===
              "string"
            ) {
              return cert;
            }

            return (
              cert.name ||
              "Unknown Certification"
            );

          }
        );

    }

    // Save to MongoDB
    const savedResume =
  await Resume.create({

    ...parsedResume,

    user:
      req.user.id

  });
    res.status(201).json({
      success: true,
      message:
        "Resume parsed and saved successfully",
      data: savedResume
    });

  } catch (error) {

    console.error(
      "Upload Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// Get All Resumes
const getAllResumes = async (
  req,
  res
) => {
  try {

   const resumes =
  await Resume.find({
    user: req.user.id
  });
    res.status(200).json({
      success: true,
      count:
        resumes.length,
      data: resumes
    });

  } catch (error) {

    console.error(
      "Get Resumes Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// Get Resume By ID
const getResumeById =
  async (req, res) => {

    try {

      const resume =
        await Resume.findById(
          req.params.id
        );

      if (!resume) {

        return res.status(
          404
        ).json({
          success: false,
          message:
            "Resume not found"
        });

      }

      res.status(200).json({
        success: true,
        data: resume
      });

    } catch (error) {

      console.error(
        "Get Resume Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          error.message
      });

    }

  };


// Delete Resume
const deleteResume =
  async (req, res) => {

    try {

      const resume =
        await Resume.findByIdAndDelete(
          req.params.id
        );

      if (!resume) {

        return res.status(
          404
        ).json({
          success: false,
          message:
            "Resume not found"
        });

      }

      res.status(200).json({
        success: true,
        message:
          "Resume deleted successfully"
      });

    } catch (error) {

      console.error(
        "Delete Resume Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          error.message
      });

    }

  };


module.exports = {
  uploadResume,
  getAllResumes,
  getResumeById,
  deleteResume
};

