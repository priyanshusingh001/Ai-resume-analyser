import { Target } from "lucide-react";

function ATSScoreCard({ score = 0 }) {

  const circumference = 2 * Math.PI * 70;

  const strokeDashoffset =
    circumference -
    (score / 100) * circumference;

  return (
    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      shadow-2xl
    "
    >

      <div className="flex items-center gap-3 mb-6">

        <div className="p-2 rounded-xl bg-blue-500/20">
          <Target size={20} />
        </div>

        <h2 className="text-xl font-semibold">
          ATS Score
        </h2>

      </div>

      <div className="flex justify-center">

        <div className="relative">

          <svg
            width="180"
            height="180"
            className="-rotate-90"
          >

            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="12"
              fill="transparent"
            />

            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="#3b82f6"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />

          </svg>

          <div
            className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
          "
          >

            <span className="text-5xl font-bold">
              {score}
            </span>

            <span className="text-slate-400 text-sm">
              ATS SCORE
            </span>

          </div>

        </div>

      </div>

      <div className="mt-6">

        <div className="flex justify-between text-sm text-slate-400">

          <span>Poor</span>

          <span>Average</span>

          <span>Excellent</span>

        </div>

      </div>

    </div>
  );
}

export default ATSScoreCard;