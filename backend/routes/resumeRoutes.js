const express = require("express");
const multer = require("multer");
const protect = require(
  "../middleware/authMiddleware"
);
const {
  uploadResume,
  getAllResumes,
  getResumeById,
  deleteResume
} = require("../controllers/resumeController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + file.originalname
    );
  }
});

const upload = multer({ storage });

router.post(
  "/upload",
  protect,
  upload.single("resume"),
  uploadResume
);

router.get(
  "/",
  protect,
  getAllResumes
);

router.get(
  "/:id",
  protect,
  getResumeById
);

router.delete(
  "/:id",
  protect,
  deleteResume
);

module.exports = router;