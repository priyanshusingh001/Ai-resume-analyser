import { TrendingUp } from "lucide-react";

function StrengthsCard({ strengths = [] }) {
  return (
    <div className="
      bg-white/10
      backdrop-blur-xl
      border
      border-emerald-500/20
      rounded-3xl
      shadow-2xl
      p-6
    ">
      <div className="flex items-center gap-3 mb-6">

        <div className="p-2 rounded-xl bg-emerald-500/20">
          <TrendingUp size={20} />
        </div>

        <h2 className="text-xl font-bold">
          Strengths
        </h2>

      </div>

      <ul className="space-y-4">

        {strengths.map((item, index) => (
          <li
            key={index}
            className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-4
          "
          >
            ✅ {item}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default StrengthsCard;