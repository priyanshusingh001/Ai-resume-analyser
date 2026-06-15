import { Sparkles, FileText, Target } from "lucide-react";

function HeroSection() {
  return (
    <section className="mb-10">
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-gradient-to-br
          from-slate-900
          via-slate-900
          to-blue-950
          p-8
          md:p-12
          overflow-hidden
          relative
        "
      >
        <div className="relative z-10 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} />
            <span className="text-sm">
              AI Powered ATS Optimization
            </span>
          </div>

          <h1
            className="
              text-4xl
              md:text-6xl
              font-extrabold
              leading-tight
              max-w-4xl
              mx-auto
            "
          >
            Optimize Your Resume
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              With AI Intelligence
            </span>
          </h1>

          <p
            className="
              mt-6
              text-slate-300
              text-lg
              max-w-3xl
              mx-auto
            "
          >
            Upload your resume and instantly get ATS scores,
            strengths, weaknesses, missing skills, and
            AI-powered recommendations tailored for job applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <FileText size={18} />
              <span>Resume Analysis</span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <Target size={18} />
              <span>ATS Optimization</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;