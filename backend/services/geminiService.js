const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

const cleanAndParseJSON = (text) => {
  const cleaned = text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
};

const analyzeResume = async (resumeText) => {
  const prompt = `
You are an expert ATS Resume Analyzer.

Return ONLY valid JSON.

{
  "name": "",
  "email": "",
  "phone": "",
  "skills": [],
  "education": [],
  "experience": [],
  "projects": [],
  "certifications": []
}

Resume:
${resumeText}
`;

  const result = await model.generateContent(prompt);

  return cleanAndParseJSON(
    result.response.text()
  );
};

const analyzeATS = async (
  resumeData,
  jobDescription
) => {

  const prompt = `
Analyze the resume against the job description.

Resume:
${JSON.stringify(resumeData)}

Job Description:
${jobDescription}

Return ONLY JSON.

{
  "atsScore": 0,
  "matchedSkills": [],
  "missingSkills": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "fit": ""
}
`;

  const result =
    await model.generateContent(prompt);

  return cleanAndParseJSON(
    result.response.text()
  );
};

module.exports = {
  analyzeResume,
  analyzeATS
};