import { CheckCircle } from "lucide-react";

function MatchedSkillsCard({
  skills = []
}) {
  return (
    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border
      border-emerald-500/20
      rounded-3xl
      shadow-2xl
      p-6
    "
    >
      <div className="flex items-center gap-3 mb-6">

        <div className="p-2 rounded-xl bg-emerald-500/20">
          <CheckCircle size={20} />
        </div>

        <h2 className="text-xl font-bold">
          Matched Skills
        </h2>

      </div>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill, index) => (
          <span
            key={index}
            className="
            bg-emerald-500/10
            border
            border-emerald-500/20
            px-4
            py-2
            rounded-full
          "
          >
            ✅ {skill}
          </span>
        ))}

      </div>
    </div>
  );
}

export default MatchedSkillsCard;