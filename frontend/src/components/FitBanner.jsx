import { CheckCircle } from "lucide-react";

function FitBanner({ fit }) {
  return (
    <div className="
      bg-emerald-500/10
      border
      border-emerald-500/20
      rounded-3xl
      p-6
      mb-8
    ">
      <div className="flex items-center gap-3">

        <CheckCircle
          size={28}
          className="text-emerald-400"
        />

        <div>

          <h2 className="text-xl font-bold">
            Job Fit Analysis
          </h2>

          <p className="text-slate-300 mt-1">
            {fit}
          </p>

        </div>

      </div>
    </div>
  );
}

export default FitBanner;
