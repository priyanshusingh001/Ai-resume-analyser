const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();

    res.json({
      success: true,
      count: resumes.length,
      data: resumes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};