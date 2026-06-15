
import { useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import UploadSection from "../components/UploadSection";
import ATSScoreCard from "../components/ATSScoreCard";
import StrengthsCard from "../components/StrengthsCard";
import WeaknessesCard from "../components/WeaknessesCard";
import SuggestionsCard from "../components/SuggestionsCard";
import ResumeOverviewCard from "../components/ResumeOverviewCard";
import SkillsCard from "../components/SkillsCard";
import ResumeHistory from "../components/ResumeHistory";
import HeroSection from "../components/HeroSection";
import FitBanner from "../components/FitBanner";


function UploadResume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [resumeData, setResumeData] =
    useState(null);

  const [jobDescription, setJobDescription] =
    useState("");

  const [atsResult, setAtsResult] =
    useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append(
        "resume",
        file
      );

      const response =
        await API.post(
          "/resume/upload",
          formData
        );

      setResumeData(
        response.data.data
      );

      setAtsResult(null);

    } catch (error) {

      console.error(error);

      alert(
        "Upload Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  const handleATSAnalysis =
    async () => {

      if (
        !jobDescription.trim()
      ) {
        alert(
          "Please enter a Job Description"
        );
        return;
      }

      try {

        const response =
          await API.post(
            "/ats/ai-score",
            {
              resumeId:
                resumeData._id,
              jobDescription
            }
          );

        setAtsResult(
          response.data.data
        );

      } catch (error) {

        console.error(error);

        alert(
          "ATS Analysis Failed"
        );

      }
    };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="w-full px-4 lg:px-8 py-8">
        <HeroSection />

        {/* Top Grid */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
        >

          <UploadSection
            file={file}
            setFile={setFile}
            handleUpload={
              handleUpload
            }
            loading={loading}
          />

          <ATSScoreCard
            score={
              atsResult?.atsScore ||
              0
            }
          />

        </div>

        {/* Resume Overview */}
{resumeData && (
  <div className="mt-8">
    <ResumeOverviewCard
      resumeData={resumeData}
    />
  </div>
)}

{/* Skills */}
{resumeData && (
  <div className="mt-8">
    <SkillsCard
      skills={resumeData.skills || []}
    />
  </div>
)}

        {/* ATS Analyzer */}

        {resumeData && (

  <div
    className="
    mt-8
    bg-white/10
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    shadow-2xl
    p-6
  "
  >

    <div className="flex items-center gap-3 mb-6">

      <div className="p-2 rounded-xl bg-blue-500/20">
        🎯
      </div>

      <h2 className="text-2xl font-bold">
        ATS Job Match Analysis
      </h2>

    </div>

    <p className="text-slate-400 mb-4">
      Paste the job description and let AI compare
      your resume against ATS requirements.
    </p>

    <textarea
      rows="10"
      value={jobDescription}
      onChange={(e) =>
        setJobDescription(
          e.target.value
        )
      }
      placeholder="Paste Job Description Here..."
      className="
        w-full
        bg-slate-900/60
        border
        border-white/10
        rounded-2xl
        p-4
        text-white
        placeholder:text-slate-500
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />

    <button
      onClick={handleATSAnalysis}
      className="
        mt-6
        bg-gradient-to-r
        from-blue-500
        to-cyan-500
        text-white
        px-6
        py-3
        rounded-xl
        font-semibold
        hover:scale-[1.02]
        transition
      "
    >
      Analyze ATS Match
    </button>

  </div>

)}
        {/* ATS Results */}
        
{/* AI Insights */}

{atsResult && (
  <>
    <div className="mt-8">
      <FitBanner
        fit={atsResult.fit}
      />
    </div>

    <div
      className="
      mt-8
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-6
    "
    >

      <StrengthsCard
        strengths={
          atsResult.strengths || []
        }
      />

      <WeaknessesCard
        weaknesses={
          atsResult.weaknesses || []
        }
      />

    </div>
  </>
)}

{/* Suggestions */}

{atsResult && (

  <div className="mt-8">

    <SuggestionsCard
      suggestions={
        atsResult.suggestions || []
      }
    />

  </div>

)}



        {atsResult && (

          <div
            className="
            mt-8
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
          "
          >

            <div className="bg-white/10
                backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  shadow-2xl
                  p-6">

              <h3 className="text-xl font-bold mb-4">
                Matched Skills
              </h3>

              <ul className="space-y-2">

                {atsResult.matchedSkills?.map(
                  (
                    skill,
                    index
                  ) => (
                    <li key={index}>
                      ✅ {skill}
                    </li>
                  )
                )}

              </ul>

            </div>

            <div className="bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-3xl
shadow-2xl
p-6">

              <h3 className="text-xl font-bold mb-4">
                Missing Skills
              </h3>

              <ul className="space-y-2">

                {atsResult.missingSkills?.map(
                  (
                    skill,
                    index
                  ) => (
                    <li key={index}>
                      ❌ {skill}
                    </li>
                  )
                )}

              </ul>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}
<div className="mt-8">
  <ResumeHistory />
</div>

export default UploadResume;

